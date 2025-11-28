import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import axiosInstance from '@/utils/axios'
import { router } from '@/router'
import type { AuthState, LoginCredentials, AuthResponse, DecodedToken } from '@/types'

/**
 * Route mapping for different user roles and departments
 * Maps department types to their corresponding dashboard route names
 */
const ROUTES = {
  admin: 'AdminDashboard',
  consultation: 'ConsultationDashboard',
  investigation: 'InvestigationDashboard',
  nursing: 'NursingDashboard',
}

/**
 * Authentication Store
 * 
 * Manages user authentication state, login/logout operations, and token management.
 * Implements JWT-based authentication with automatic token refresh.
 * 
 * Features:
 * - JWT token decoding and storage
 * - Department-based role management
 * - Password reset flow
 * - Automatic token refresh on expiry
 * - Persistent state via localStorage
 */
export const useAuthStore = defineStore('authStore', {
  state: (): AuthState => ({
    user: null,
    token: null,
    userToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    returnUrl: null,
  }),

  getters: {
    /**
     * Returns the current authenticated user
     */
    currentUser: (state) => state.user,
    
    /**
     * Checks if user is a super administrator
     */
    isSuperAdmin: (state) => !!state.user?.is_superuser,
    
    /**
     * Checks if user is an admin (super admin or admin role)
     */
    isAdmin: (state) => state.user?.role === 'admin',

    /**
     * Checks if user belongs to investigation department
     */
    isInvestigation: (state) =>state.user?.department?.type === 'investigation',
    
    /**
     * Checks if user belongs to consultation department
     */
    isConsultation: (state) => state.user?.department?.type === 'consultation',
    
    /**
     * Checks if user belongs to nursing department
     */
    isNursing: (state) => state.user?.department?.type === 'nursing',

    /**
     * Returns the user's role
     */
    userRole: (state) => state.user?.role || null,
    
    /**
     * Returns the user's department type
     */
    userDepartment: (state) => state.user?.department?.type || null,
    
    /**
     * Checks if user is currently logged in
     */
    isLoggedIn: (state) => state.isAuthenticated,
    
    /**
     * Returns available route mappings
     */
    routes: () => ROUTES,
  },

  actions: {
    /**
     * Authenticates user with credentials
     * 
     * @param credentials - Login credentials (username/email and password)
     * @returns Promise<boolean> - True if login successful, false otherwise
     * 
     * Process:
     * 1. Sends credentials to auth API
     * 2. Decodes JWT token to extract user data
     * 3. Stores tokens and user info in state
     * 4. Redirects to appropriate dashboard based on role/department
     */
    async login(credentials: LoginCredentials) {
      this.isLoading = true
      this.error = null

      try {
        const { data } = await axiosInstance.post<AuthResponse>('auth/token/', credentials)
        if (data.access) {
          // Decode JWT to extract user information
          const decoded = jwtDecode<DecodedToken>(data.access)
          this.token = data.access
          this.refreshToken = data.refresh
          this.isAuthenticated = true
          this.user = {
            uuid: decoded.uuid,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
            is_superuser: decoded.is_superuser,
            department: decoded.department,
          }
          return true
        }
      } catch (error: any) {
        this.handleLoginError(error)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Logs out the current user
     * 
     * Process:
     * 1. Blacklists refresh token on server
     * 2. Resets store state to initial values
     * 3. Redirects to login page
     */
    async logout() {
      try {
        // Blacklist refresh token on server
        await axiosInstance.delete('auth/token/blacklist/', {
          data: { refresh: this.refreshToken },
        })
      } catch (error) {
        console.error('Logout failed:', error)
      } finally {
        // Reset store state
        this.$reset()
        router.push({ name: 'Login' })
        // this.handleLoginError(error)
        // throw error
        // notifySuccess('Logout successful.')
      }
    },

    /**
     * Initiates password reset flow
     * 
     * @param email - User's email address
     * @returns Promise with response or error
     */
    async forgotPassword(email: string) {
      const response = await axiosInstance.post('auth/password-reset-token/', { email })
      return response
    },

    /**
     * Verifies password reset token
     * 
     * @param token - Password reset token from email
     * @returns Promise with response or false if invalid
     */
    async tokenVerify(token: string) {
      this.userToken = token
      try {
        const response = await axiosInstance.patch('auth/token/verification/', { token })
        return response
      } catch (error: any) {
        console.error('Token verification failed:', error)
        throw error
      }
    },

    /**
     * Sets new password after reset verification
     * 
     * @param uuid - User's unique identifier
     * @param password - New password
     */
    async newPassword(uuid: string, password: string) {
      try {
        const response = await axiosInstance.patch(`auth/${uuid}/password/`, {
          password,
          password2: password,
          token: this.userToken,
        })
        this.$reset()
        return response
      } catch (error: any) {
        console.error('Password reset failed:', error)
        throw error
      }
    },

    /**
     * Refreshes expired access token using refresh token
     * 
     * @returns Promise<boolean> - True if refresh successful, false otherwise
     */
    async refreshAccessToken() {
      try {
        const { data } = await axiosInstance.post<AuthResponse>('auth/token/refresh/', {
          refresh: this.refreshToken,
        })
        if (data.access) {
          this.token = data.access
          this.refreshToken = data.refresh
          return true
        }
      } catch (error) {
        console.error('Token refresh failed:', error)
        await this.logout()
        return false
      }
    },

    /**
     * Handles login errors with appropriate user feedback
     * 
     * @param error - Error object from login attempt
     */
    handleLoginError(error: any) {
      let errorMessage = 'Login failed. Please try again.'
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage =
            error.response.data?.detail ||
            'Invalid credentials. Please check your email and password.'
        } else if (error.response.data?.detail) {
          errorMessage = error.response.data.detail
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your internet connection.'
      }
      this.error = errorMessage
    },

    /**
     * Redirects user to appropriate dashboard based on role and department
     * 
     * Priority:
     * 1. Return URL (if set)
     * 2. Super admin → AdminDashboard
     * 3. Department-specific dashboard
     * 4. Fallback to AdminDashboard or /dashboard
     */
    handleRouteChange() {
      try {
        // Check for saved return URL
        if (this.returnUrl) {
          router.push(this.returnUrl)
          this.returnUrl = null
          return
        }

        // Super admin redirect
        if (this.user?.is_superuser) {
          router.push({ name: 'AdminDashboard' }).catch(() => {
            router.push('/dashboard')
          })
          return
        }

        // Department-based redirect
        const userDepartment = this.user?.department?.type
        if (userDepartment && ROUTES[userDepartment as keyof typeof ROUTES]) {
          router.push({ name: ROUTES[userDepartment as keyof typeof ROUTES] }).catch(() => {
            router.push('/dashboard')
          })
        } else {
          router.push({ name: 'AdminDashboard' }).catch(() => {
            router.push('/dashboard')
          })
        }
      } catch (error) {
        console.error('Route navigation error:', error)
        // Ultimate fallback
        router.push('/dashboard').catch(() => {
          console.error('Failed to navigate to fallback route')
        })
      }
    },

    /**
     * Sets the return URL for post-login redirect
     * 
     * @param url - URL to redirect to after successful login
     */
    setReturnUrl(url: string) {
      this.returnUrl = url
    },
  },

  // Persist state to localStorage using pinia-plugin-persistedstate
  persist: true,
})

import axios from 'axios'

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - Add auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem('authStore')
    if (authData) {
      try {
        const { token } = JSON.parse(authData)
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      } catch (e) {
        console.error('Failed to parse auth data:', e)
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If 401 and we haven't retried yet, try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const authData = localStorage.getItem('authStore')
        if (authData) {
          const { refreshToken } = JSON.parse(authData)
          if (refreshToken) {
            const response = await axios.post(
              `${axiosInstance.defaults.baseURL}/auth/token/refresh`,
              { refresh: refreshToken }
            )

            const { access } = response.data
            
            // Update stored token
            const parsedAuth = JSON.parse(authData)
            parsedAuth.token = access
            localStorage.setItem('authStore', JSON.stringify(parsedAuth))

            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${access}`
            return axiosInstance(originalRequest)
          }
        }
      } catch (refreshError) {
        // Refresh failed - clear auth and redirect to login
        localStorage.removeItem('authStore')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance

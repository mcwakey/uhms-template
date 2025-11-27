export interface User {
  uuid: string
  email: string
  first_name?: string
  last_name?: string
  is_superuser: boolean
  is_staff?: boolean
  role?: string
  phone?: string
  avatar?: string
  department?: {
    type: string
    name?: string
  }
}

export interface LoginCredentials {
  username: string
  password: string
  remember_me?: boolean
}

export interface AuthResponse {
  access: string
  refresh: string
}

export interface AuthState {
  user: User | null
  token: string | null
  userToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  returnUrl: string | null
}

export interface DecodedToken {
  uuid: string
  email: string
  role: string
  is_superuser: boolean
  department?: {
    type: string
    name?: string
  }
  exp?: number
  iat?: number
}

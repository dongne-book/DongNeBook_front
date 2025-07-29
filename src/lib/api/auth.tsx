import {apiClient} from './apiClient'
import {tokenStorage} from '../utils/tokenStorage'
import {AuthResponse, LoginCredentials} from '../interface/auth'

export async function signup(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/signup', credentials)
    const {token, refreshToken} = response.data

    // Store tokens
    await tokenStorage.setToken(token)
    if (refreshToken) {
      await tokenStorage.setRefreshToken(refreshToken)
    }

    return response.data
  } catch (error) {
    console.error('Signup failed:', error)
    throw error
  }
}

// Login function
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/login', credentials)
    const {token, refreshToken} = response.data

    // Store tokens using cross-platform storage
    await tokenStorage.setToken(token)
    if (refreshToken) {
      await tokenStorage.setRefreshToken(refreshToken)
    }

    return response.data
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}

// Logout function
export async function logout(): Promise<void> {
  try {
    // Call logout endpoint if needed
    await apiClient.post('/auth/logout')
  } catch (error) {
    console.error('Logout API call failed:', error)
  } finally {
    // Always clear local tokens
    await tokenStorage.clearAll()
  }
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const token = await tokenStorage.getToken()
  return !!token
}

// Get current token
export async function getToken(): Promise<string | null> {
  return await tokenStorage.getToken()
}

// Refresh token function
export async function refreshToken(): Promise<string | null> {
  try {
    const refreshTokenValue = await tokenStorage.getRefreshToken()
    if (!refreshTokenValue) {
      throw new Error('No refresh token available')
    }

    const response = await apiClient.post<{token: string}>('/auth/refresh', {
      refreshToken: refreshTokenValue
    })

    const {token} = response.data
    await tokenStorage.setToken(token)

    return token
  } catch (error) {
    console.error('Token refresh failed:', error)
    // Clear tokens if refresh fails
    await tokenStorage.clearAll()
    throw error
  }
}

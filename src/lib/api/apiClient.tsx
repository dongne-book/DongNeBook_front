import axios from 'axios'
import {tokenStorage} from '../utils/tokenStorage'
import {authService} from './authService'

const baseUrl = 'http://localhost:8080/api'

export const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add JWT token to headers if available
apiClient.interceptors.request.use(async config => {
  const token = await tokenStorage.getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor to handle token refresh
apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        await authService.refreshToken()
        // Retry the original request with new token
        return apiClient(originalRequest)
      } catch (refreshError) {
        // Redirect to login or handle auth failure
        console.error('Token refresh failed, redirecting to login')
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

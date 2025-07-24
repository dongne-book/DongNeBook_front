// Token storage utilities for web environment
interface TokenStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

// Web storage implementation
const webStorage: TokenStorage = {
  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null
    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.error('Error accessing localStorage:', error)
      return null
    }
  },

  setItem(key: string, value: string): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      console.error('Error setting localStorage:', error)
    }
  },

  removeItem(key: string): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }
}

// Token management utilities
export const tokenStorage = {
  getToken(): string | null {
    return webStorage.getItem('auth_token')
  },

  setToken(token: string): void {
    webStorage.setItem('auth_token', token)
  },

  removeToken(): void {
    webStorage.removeItem('auth_token')
  },

  getRefreshToken(): string | null {
    return webStorage.getItem('refresh_token')
  },

  setRefreshToken(token: string): void {
    webStorage.setItem('refresh_token', token)
  },

  removeRefreshToken(): void {
    webStorage.removeItem('refresh_token')
  },

  clearAll(): void {
    this.removeToken()
    this.removeRefreshToken()
  },

  isAuthenticated(): boolean {
    return this.getToken() !== null
  }
}

// Utility to check if we're in browser environment
export const isBrowser = typeof window !== 'undefined'

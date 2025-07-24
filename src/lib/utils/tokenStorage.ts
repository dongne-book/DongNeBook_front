// Platform-specific storage interfaces
interface TokenStorage {
  getItem(key: string): Promise<string | null>
  setItem(key: string, value: string): Promise<void>
  removeItem(key: string): Promise<void>
}

// Web storage implementation
const webStorage: TokenStorage = {
  async getItem(key: string): Promise<string | null> {
    if (typeof window === 'undefined') return null
    return localStorage.getItem(key)
  },

  async setItem(key: string, value: string): Promise<void> {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, value)
  },

  async removeItem(key: string): Promise<void> {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  }
}

// Mobile storage implementation (AsyncStorage)
let mobileStorage: TokenStorage | null = null

// Function to get Platform dynamically
const getPlatform = () => {
  try {
    return require('react-native').Platform
  } catch {
    return null
  }
}

// Initialize mobile storage if available
const initializeMobileStorage = () => {
  try {
    const AsyncStorage = require('@react-native-async-storage/async-storage').default
    return {
      async getItem(key: string): Promise<string | null> {
        return await AsyncStorage.getItem(key)
      },

      async setItem(key: string, value: string): Promise<void> {
        await AsyncStorage.setItem(key, value)
      },

      async removeItem(key: string): Promise<void> {
        await AsyncStorage.removeItem(key)
      }
    }
  } catch (error) {
    return null
  }
}

// Unified storage selector
const getStorage = (): TokenStorage => {
  const Platform = getPlatform()

  // Check if we're in React Native environment
  if (Platform && Platform.OS !== 'web') {
    if (!mobileStorage) {
      mobileStorage = initializeMobileStorage()
    }
    return mobileStorage || webStorage
  }
  return webStorage
}

// Token management utilities
export const tokenStorage = {
  async getToken(): Promise<string | null> {
    const storage = getStorage()
    return await storage.getItem('auth_token')
  },

  async setToken(token: string): Promise<void> {
    const storage = getStorage()
    await storage.setItem('auth_token', token)
  },

  async removeToken(): Promise<void> {
    const storage = getStorage()
    await storage.removeItem('auth_token')
  },

  async getRefreshToken(): Promise<string | null> {
    const storage = getStorage()
    return await storage.getItem('refresh_token')
  },

  async setRefreshToken(token: string): Promise<void> {
    const storage = getStorage()
    await storage.setItem('refresh_token', token)
  },

  async removeRefreshToken(): Promise<void> {
    const storage = getStorage()
    await storage.removeItem('refresh_token')
  },

  async clearAll(): Promise<void> {
    await this.removeToken()
    await this.removeRefreshToken()
  }
}

// Detect platform utility
export const isWeb = typeof window !== 'undefined'
export const isMobile = (() => {
  const Platform = getPlatform()
  return Platform && Platform.OS !== 'web'
})()

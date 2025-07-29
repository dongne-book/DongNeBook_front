# Cross-Platform JWT Token Management Setup

This setup allows your app to work with both web (Next.js) and mobile (Expo) platforms.

## Installation

### For Mobile/Expo Support

When you create your Expo project, you'll need to install AsyncStorage:

```bash
# Install AsyncStorage for mobile token storage
npm install @react-native-async-storage/async-storage

# For Expo managed workflow
expo install @react-native-async-storage/async-storage
```

### For Web Support

Your current Next.js setup already supports web storage via localStorage.

## Usage Examples

### Login (works on both platforms)

```typescript
import {authService} from '@/lib/api/authService'

const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authService.login({email, password})
    console.log('User logged in:', response.user)
    // Token is automatically stored and will be used in subsequent API calls
  } catch (error) {
    console.error('Login failed:', error)
  }
}
```

### Check Authentication Status

```typescript
import {authService} from '@/lib/api/authService'

const checkAuth = async () => {
  const isLoggedIn = await authService.isAuthenticated()
  if (isLoggedIn) {
    console.log('User is authenticated')
  } else {
    console.log('User needs to login')
  }
}
```

### Manual Token Management

```typescript
import {tokenStorage} from '@/lib/utils/tokenStorage'

// Store token manually
await tokenStorage.setToken('your-jwt-token')

// Get current token
const token = await tokenStorage.getToken()

// Remove token (logout)
await tokenStorage.removeToken()
```

### Logout

```typescript
import {authService} from '@/lib/api/authService'

const handleLogout = async () => {
  await authService.logout()
  // Tokens are cleared and user needs to login again
}
```

## Platform Detection

```typescript
import {isWeb, isMobile} from '@/lib/utils/tokenStorage'

if (isWeb) {
  console.log('Running on web - using localStorage')
} else if (isMobile) {
  console.log('Running on mobile - using AsyncStorage')
}
```

## Expo Development

When developing with Expo, the token storage will automatically:

- Use AsyncStorage on iOS/Android
- Use localStorage when running in Expo web
- Handle the transition seamlessly

## Testing in Expo

1. **Expo Go App**: Tokens work with AsyncStorage
2. **Expo Web**: Tokens work with localStorage
3. **Expo Dev Build**: Tokens work with AsyncStorage

The interceptors in `apiClient.tsx` will automatically:

- Add tokens to all API requests
- Handle token refresh on 401 errors
- Work consistently across platforms

## Error Handling

The system gracefully handles:

- Missing AsyncStorage (falls back to localStorage)
- Server-side rendering (Next.js)
- Token refresh failures
- Network connectivity issues

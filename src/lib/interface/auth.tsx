export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials {
  email: string
  password: string
  nickname: string
}

export interface AuthResponse {
  token: string
  refreshToken: string
  email: string
  nickname: string
}

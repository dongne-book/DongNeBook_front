import {PlaceResponseDTO} from './place'
import {UserResponseDTO} from './user'

export interface PostResponseDetailDTO {
  id: number
  content: string
  visitDate: string // ISO date string (YYYY-MM-DD)
  imageUrl: string
  isPublic: boolean
  place: PlaceResponseDTO
  createdBy: UserResponseDTO
  createdAt: string // ISO datetime string
  modifiedBy: UserResponseDTO
  modifiedAt: string // ISO datetime string
  likeCount: number
}

export interface PostResponseDTO {
  id: number
  content: string
  visitDate: string // ISO date string (YYYY-MM-DD)
  imageUrl: string
  isPublic: boolean
  place: PlaceResponseDTO
  createdBy: string
  createdAt: string // ISO datetime string
  modifiedBy: string
  modifiedAt: string // ISO datetime string
}

export interface PostRequestDTO {
  content: string
  visitDate: string
  imageUrl: string
  isPublic: boolean
  placeId: number
  albumId: number
}

export interface PostRequestDTO {
  content: string;
  visitDate: string; // ISO date string
  imageUrl: string;
  isPublic: boolean;
  placeId: number;
  albumId: number;
}

export interface PlaceResponseDTO {
  id: number;
  name: string;
  address: string;
  // Add other place-related fields as needed
}

export interface UserResponseDTO {
  id: number;
  username: string;
  profileImageUrl?: string;
  // Add other user-related fields as needed
}

export interface PostResponseDTO {
  id: number;
  content: string;
  visitDate: string;
  imageUrl: string;
  isPublic: boolean;
  place: PlaceResponseDTO;
  createdBy?: UserResponseDTO;
  createdAt?: string;
  modifiedBy?: UserResponseDTO;
  modifiedAt?: string;
}

export interface PostResponseDetailDTO extends PostResponseDTO {
  likeCount: number;
}
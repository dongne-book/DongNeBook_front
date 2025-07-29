import {PageResponse, PaginationParams} from '../interface/page'
import {PostRequestDTO, PostResponseDetailDTO, PostResponseDTO} from '../interface/post'
import {apiClient} from './apiClient'

export const getAllPostsPaginated = async (
  params: PaginationParams = {}
): Promise<PageResponse<PostResponseDetailDTO>> => {
  try {
    const {page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'} = params
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      sortBy,
      sortDir
    })

    const response = await apiClient.get(`/posts/paginated?${queryParams}`)
    if (!response) throw new Error('Failed to fetch paginated posts')
    return response.data
  } catch (error) {
    console.error('Error fetching paginated posts:', error)
    throw error instanceof Error
      ? error
      : new Error('An unexpected error occurred while fetching posts')
  }
}
export const getPostById = async (id: number): Promise<PostResponseDTO> => {
  try {
    const response = await apiClient.get(`/posts/${id}`)
    if (!response) throw new Error(`Failed to fetch post with id ${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error)
    throw error instanceof Error
      ? error
      : new Error(`An unexpected error occurred while fetching post with id ${id}`)
  }
}

export const createPost = async (postData: PostRequestDTO): Promise<PostResponseDTO> => {
  try {
    const response = await apiClient.post(`/posts`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: postData
    })
    if (!response) throw new Error('Failed to create post')
    return response.data
  } catch (error) {
    console.error('Error creating post:', error)
    throw error instanceof Error
      ? error
      : new Error('An unexpected error occurred while creating post')
  }
}

export const deletePost = async (id: number): Promise<void> => {
  const response = await apiClient.delete(`/posts/${id}`)
  if (!response) throw new Error(`Failed to delete post with id ${id}`)
}

export const getPostsByAlbumId = async (albumId: number): Promise<PostResponseDTO[]> => {
  const response = await apiClient.get(`/posts/albums/${albumId}`)
  if (!response) throw new Error(`Failed to fetch posts for album ${albumId}`)
  return response.data
}

export const getPostsByPlaceId = async (placeId: number): Promise<PostResponseDTO[]> => {
  const response = await apiClient.get(`/posts/places/${placeId}`)
  if (!response) throw new Error(`Failed to fetch posts for place ${placeId}`)
  return response.data
}

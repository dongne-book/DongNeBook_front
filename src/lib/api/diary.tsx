import {DiaryRequestDTO, DiaryResponseDTO, DiaryDetailDTO} from '../interface/diary'
import {PageResponse, PaginationParams} from '../interface/page'
import {apiClient} from './apiClient'

export const getAllDiaries = async (): Promise<DiaryResponseDTO[]> => {
  try {
    const response = await apiClient.get('/diaries')
    if (!response) throw new Error('Failed to fetch diaries')
    return response.data
  } catch (error) {
    console.error('Error fetching diaries:', error)
    throw error instanceof Error
      ? error
      : new Error('An unexpected error occurred while fetching diaries')
  }
}

export const getAllDiariesPaginated = async (
  params: PaginationParams = {}
): Promise<PageResponse<DiaryDetailDTO>> => {
  try {
    const {page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'} = params
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      sortBy,
      sortDir
    })

    const response = await apiClient.get(`/diaries/paginated?${queryParams}`)
    if (!response) throw new Error('Failed to fetch paginated diaries')
    return response.data
  } catch (error) {
    console.error('Error fetching paginated diaries:', error)
    throw error instanceof Error
      ? error
      : new Error('An unexpected error occurred while fetching paginated diaries')
  }
}

export const getDiaryById = async (id: number): Promise<DiaryDetailDTO> => {
  try {
    const response = await apiClient.get(`/diaries/${id}`)
    if (!response) throw new Error(`Failed to fetch diary with id ${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching diary with id ${id}:`, error)
    throw error instanceof Error
      ? error
      : new Error(`An unexpected error occurred while fetching diary with id ${id}`)
  }
}

export const createDiary = async (
  diaryData: DiaryRequestDTO
): Promise<DiaryResponseDTO> => {
  try {
    const response = await apiClient.post('/diaries', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: diaryData
    })
    if (!response) throw new Error('Failed to create diary')
    return response.data
  } catch (error) {
    console.error('Error creating diary:', error)
    throw error instanceof Error
      ? error
      : new Error('An unexpected error occurred while creating diary')
  }
}

export const updateDiary = async (
  id: number,
  diaryData: DiaryRequestDTO
): Promise<DiaryResponseDTO> => {
  try {
    const response = await apiClient.patch(`/diaries/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: diaryData
    })
    if (!response) throw new Error(`Failed to update diary with id ${id}`)
    return response.data
  } catch (error) {
    console.error(`Error updating diary with id ${id}:`, error)
    throw error instanceof Error
      ? error
      : new Error(`An unexpected error occurred while updating diary with id ${id}`)
  }
}

export const deleteDiary = async (id: number): Promise<void> => {
  try {
    const response = await apiClient.delete(`/diaries/${id}`)
    if (!response) throw new Error(`Failed to delete diary with id ${id}`)
  } catch (error) {
    console.error(`Error deleting diary with id ${id}:`, error)
    throw error instanceof Error
      ? error
      : new Error(`An unexpected error occurred while deleting diary with id ${id}`)
  }
}

export const searchDiaries = async (
  keyword: string,
  params: PaginationParams = {}
): Promise<PageResponse<DiaryDetailDTO>> => {
  try {
    const {page = 0, size = 10} = params
    const queryParams = new URLSearchParams({
      keyword,
      page: page.toString(),
      size: size.toString()
    })

    const response = await apiClient.get(`/diaries/search?${queryParams}`)
    if (!response) throw new Error('Failed to search diaries')
    return response.data
  } catch (error) {
    console.error('Error searching diaries:', error)
    throw error instanceof Error
      ? error
      : new Error('An unexpected error occurred while searching diaries')
  }
}

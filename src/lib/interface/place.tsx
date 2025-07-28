import {RegionResponseDTO} from './region'

export interface PlaceResponseDTO {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
  region: RegionResponseDTO
}

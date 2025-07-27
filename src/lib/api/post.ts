import axios from 'axios';
import { DiaryResponseDTO } from "./interfaces/diary";

// 다이어리 생성
export async function createDiary(data: Omit<DiaryResponseDTO, 'id' | 'createdAt'>): Promise<DiaryResponseDTO> {
  const res = await axios.post('/api/diaries', data);
  return res.data;
}

import axios from 'axios';
import { DiaryResponseDTO } from "./interfaces/diary";
import { PostRequestDTO, PostResponseDTO } from "./interfaces/post";

// 다이어리 수정
export async function updateDiary(id: number, data: Partial<DiaryResponseDTO>): Promise<DiaryResponseDTO> {
  const res = await axios.patch(`/api/diaries/${id}`, data);
  return res.data;
}

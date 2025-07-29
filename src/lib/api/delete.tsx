import axios from 'axios';
import { DiaryResponseDTO } from "./interfaces/diary";

// 다이어리 삭제
export async function deleteDiary(id: number): Promise<void> {
  await axios.delete(`/api/diaries/${id}`);
}

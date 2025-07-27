import axios from 'axios';
import { DiaryDetailDTO, DiaryResponseDTO } from "./interfaces/diary";
import { PostResponseDTO, PostResponseDetailDTO } from "./interfaces/post";

// 전체 다이어리 목록 조회
export async function fetchDiaries(): Promise<DiaryResponseDTO[]> {
  try {
    const { data } = await axios.get('/api/diaries');
    
    if (data && data.length > 0) {
      // 데이터가 존재할 때
      return data;
    } else {
      // 데이터가 비어 있을 때
      console.warn("다이어리 목록이 비어 있어요.");
      return [];
    }
  } catch (error) {
    console.error("다이어리 목록 조회 실패:", error);
    return []; // 에러 시 빈 배열 반환
  }
}

// 다이어리 상세 조회
export async function fetchDiaryById(id: number): Promise<DiaryDetailDTO> {
  const { data } = await axios.get(`/api/diaries/${id}`);
  return data;
}


// 전체 게시글 목록 조회
export async function fetchAllPosts(): Promise<PostResponseDTO[]> {
  try {
    const { data } = await axios.get('/api/posts');
    return data;
  } catch (error) {
    console.error("게시글 목록 조회 실패:", error);
    return [];
  }
}

// 게시글 상세 조회
export async function fetchPostById(id: number): Promise<PostResponseDTO> {
  const { data } = await axios.get(`/api/posts/${id}`);
  return data;
}

// 페이지네이션된 게시글 상세 목록 조회
export async function fetchPaginatedPosts(
  page: number = 0,
  size: number = 10,
  sortBy: string = 'createdAt',
  sortDir: string = 'desc'
): Promise<{ content: PostResponseDetailDTO[] }> {
  const { data } = await axios.get(`/api/posts/paginated`, {
    params: { page, size, sortBy, sortDir }
  });
  return data;
}

// 앨범 ID로 게시글 목록 조회
export async function fetchPostsByAlbumId(albumId: number): Promise<PostResponseDTO[]> {
  const { data } = await axios.get(`/api/posts/albums/${albumId}`);
  return data;
}

// 장소 ID로 게시글 목록 조회
export async function fetchPostsByPlaceId(placeId: number): Promise<PostResponseDTO[]> {
  const { data } = await axios.get(`/api/posts/places/${placeId}`);
  return data;
}
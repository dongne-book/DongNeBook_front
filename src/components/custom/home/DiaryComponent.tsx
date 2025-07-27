import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DiaryResponseDTO } from '@/lib/api/interfaces/diary';

export function DiaryComponent() {
  const [data, setData] = useState<DiaryResponseDTO | null>(null);

  useEffect(() => {
    axios.get('/api/diaries')
      .then((res) => setData(res.data[0]))
      .catch((err) => console.error('다이어리 불러오기 실패:', err));
  }, []);

  if (!data) return <p className="text-center text-gray-400">불러오는 중...</p>;

  return (
    <Card className="w-full max-w-md mx-auto h-full p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center w-full h-full flex-col gap-4">
        <div className="flex items-center gap-4 w-full h-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col items-start">
            <span className="text-sm text-gray-500">{data.region}</span>
          </div>
        </div>

        <img
          className="text-gray-800"
          src="https://cdn.imweb.me/upload/S20210927e14f9f0cf71bc/44851455a9c9e.png"
          alt="Diary Entry"
        />

        <div className="w-full h-full flex items-start justify-center flex-col gap-2">
          <span className="text-gray-600 text-sm">{data.title}</span>
          <span className="text-gray-600 text-sm">{data.content}</span>
        </div>
      </div>
    </Card>
  );
}

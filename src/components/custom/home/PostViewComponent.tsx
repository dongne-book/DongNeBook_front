import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { PostResponseDTO } from '@/lib/api/interfaces/post';

export function PostViewComponent() {
  const [posts, setPosts] = useState<PostResponseDTO[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: PostResponseDTO[] = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };
    loadPosts();
  }, []);

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full h-full space-x-4 pb-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="shrink-0 w-[90%] max-w-md mx-auto h-full p-4 bg-white shadow-lg rounded-lg"
          >
            <div className="flex items-center justify-center w-full h-full flex-col gap-4">
              <div className="flex items-center gap-4 w-full h-full">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div className="flex w-full flex-col items-start">
                  <span className="text-lg font-semibold">{post.createdBy?.username ?? '익명'}</span>
                  <span className="text-sm text-gray-500">{post.place?.name ?? '장소 없음'}</span>
                </div>
              </div>

              <img
                className="text-gray-800 aspect-square object-cover rounded-md w-full h-auto"
                src={post.imageUrl}
                alt="post image"
              />

              <div className="w-full h-full flex items-start justify-center flex-col gap-2">
                <span className="text-gray-600 text-sm">{post.content}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

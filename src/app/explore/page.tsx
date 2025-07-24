'use client'

import DiaryCard from '@/components/custom/search/DiaryCard'
import TopBar from '@/components/custom/search/TopBar'
import {getAllPostsPaginated} from '@/lib/api/post'
import {PostResponseDetailDTO} from '@/lib/interface/post'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

const Page = () => {
  const router = useRouter()
  const [posts, setPosts] = useState<PostResponseDetailDTO[]>([])

  const handleSearchClick = () => {
    router.push('/search')
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPostsPaginated({
          page: 0,
          size: 10,
          sortBy: 'createdAt',
          sortDir: 'desc'
        })
        setPosts(data.content) // Assuming the API returns a paginated response with a 'content' field
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen --color-background">
      <TopBar onSearchClick={handleSearchClick} />
      <div className="py-4">
        {posts.length > 0 ? (
          <div>
            {posts.map((post, index) => (
              <DiaryCard
                key={index}
                title={'asdf'}
                content={post.content}
                imageUrl={post.imageUrl}
                createdAt={post.createdAt}
                createdBy={post.createdBy.nickname}
              />
            ))}
          </div>
        ) : (
          <div>No results found.</div>
        )}
      </div>
    </div>
  )
}

export default Page

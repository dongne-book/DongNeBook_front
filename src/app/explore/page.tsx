'use client'

import DiaryCardSkeleton from '@/components/custom/search/DiartCardSkeleton'
import DiaryCard from '@/components/custom/search/DiaryCard'
import TopBar from '@/components/custom/search/TopBar'
import {getAllDiariesPaginated} from '@/lib/api/diary'
import {getAllPostsPaginated} from '@/lib/api/post'
import {DiaryDetailDTO} from '@/lib/interface/diary'
import {PostResponseDetailDTO} from '@/lib/interface/post'
import {useRouter} from 'next/navigation'
import {useEffect, useState, useCallback} from 'react'

const Page = () => {
  const router = useRouter()
  const [diaryList, setDiaryList] = useState<DiaryDetailDTO[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  const fetchDiaries = useCallback(
    async (page: number, isInitial = false) => {
      if (isLoading) return

      setIsLoading(true)
      if (isInitial) setIsInitialLoading(true)

      try {
        const data = await getAllDiariesPaginated({
          page,
          size: 10,
          sortBy: 'createdAt',
          sortDir: 'desc'
        })

        if (isInitial) {
          setDiaryList(data.content)
        } else {
          setDiaryList(prev => [...prev, ...data.content])
        }

        setHasNextPage(!data.last)
        setCurrentPage(page)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setIsLoading(false)
        if (isInitial) setIsInitialLoading(false)
      }
    },
    [isLoading]
  )

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading ||
      !hasNextPage
    ) {
      return
    }
    fetchDiaries(currentPage + 1)
  }, [currentPage, hasNextPage, isLoading, fetchDiaries])

  useEffect(() => {
    fetchDiaries(0, true)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-y-auto overscroll-y-auto">
      <TopBar />
      <div className="w-full pt-16 pb-4">
        {isInitialLoading ? (
          <div className="flex flex-col items-center w-full">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <DiaryCardSkeleton key={`initial-skeleton-${index}`} />
              ))}
          </div>
        ) : diaryList.length > 0 ? (
          <div className="flex flex-col items-center w-full">
            {diaryList.map((diary, index) => (
              <DiaryCard key={`${diary.id}-${index}`} diary={diary} />
            ))}
            {isLoading && (
              <div className="flex flex-col items-center w-full">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <DiaryCardSkeleton key={`loading-skeleton-${index}`} />
                  ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-2 text-lg text-gray-600">아직 일기가 없습니다</div>
            <div className="text-sm text-gray-400">첫 번째 일기를 작성해보세요!</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page

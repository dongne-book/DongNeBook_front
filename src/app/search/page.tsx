'use client'

import {useState, useCallback, useEffect} from 'react'
import TopBar from '@/components/custom/search/TopBar'
import SearchBar from '@/components/custom/search/SearchBar'
import DiaryCard from '@/components/custom/search/DiaryCard'
import DiaryCardSkeleton from '@/components/custom/search/DiartCardSkeleton'
import {searchDiaries} from '@/lib/api/diary'
import {DiaryDetailDTO} from '@/lib/interface/diary'

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [diaryList, setDiaryList] = useState<DiaryDetailDTO[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const fetchSearchResults = useCallback(
    async (query: string, page: number, isInitial = false) => {
      if (isLoading || !query.trim()) return

      setIsLoading(true)
      if (isInitial) setIsInitialLoading(true)

      try {
        const data = await searchDiaries(query, {
          page,
          size: 10
        })

        if (isInitial) {
          setDiaryList(data.content)
        } else {
          setDiaryList(prev => [...prev, ...data.content])
        }

        setHasNextPage(!data.last)
        setCurrentPage(page)
      } catch (error) {
        console.error('Error searching diaries:', error)
      } finally {
        setIsLoading(false)
        if (isInitial) setIsInitialLoading(false)
      }
    },
    [isLoading]
  )

  const handleSearch = (query: string) => {
    if (!query.trim()) return

    setSearchQuery(query)
    setDiaryList([])
    setCurrentPage(0)
    setHasNextPage(true)
    setHasSearched(true)
    fetchSearchResults(query, 0, true)
  }

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading ||
      !hasNextPage ||
      !searchQuery.trim()
    ) {
      return
    }
    fetchSearchResults(searchQuery, currentPage + 1)
  }, [currentPage, hasNextPage, isLoading, searchQuery, fetchSearchResults])

  useEffect(() => {
    if (hasSearched) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, hasSearched])

  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-y-auto overscroll-y-auto">
      <SearchBar onSearch={handleSearch} />

      <div className="w-full pt-16 pb-4">
        {isInitialLoading ? (
          <div className="flex flex-col items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <DiaryCardSkeleton key={`search-skeleton-${index}`} />
              ))}
          </div>
        ) : hasSearched ? (
          diaryList.length > 0 ? (
            <div className="flex flex-col items-center">
              <div className="mb-4 text-sm text-gray-600">
                "{searchQuery}"에 대한 검색 결과 ({diaryList.length}개)
              </div>
              {diaryList.map((diary, index) => (
                <DiaryCard key={`${diary.id}-${index}`} diary={diary} />
              ))}
              {isLoading && (
                <div className="flex flex-col items-center">
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
              <div className="mb-2 text-lg text-gray-600">
                "{searchQuery}"에 대한 검색 결과가 없습니다
              </div>
              <div className="text-sm text-gray-400">다른 키워드로 검색해보세요</div>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-2 text-lg text-gray-600">검색어를 입력하세요</div>
            <div className="text-sm text-gray-400">
              제목이나 내용으로 일기를 검색할 수 있습니다
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page

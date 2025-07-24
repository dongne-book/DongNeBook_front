'use client'

import DiaryCard from '@/components/custom/search/DiaryCard'
import TopBar from '@/components/custom/search/TopBar'
import {useRouter} from 'next/navigation'

const results = [
  {
    title: 'Example Result 1',
    content: 'This is an example search result.',
    imageUrl: 'https://placehold.co/600x400',
    createdAt: '2023-10-01',
    createdBy: 'User1'
  },
  {
    title: 'Example Result 2',
    content: 'This is another example search result.',
    imageUrl: 'https://placehold.co/600x400',
    createdAt: '2023-10-02',
    createdBy: 'User2'
  },
  {
    title: 'Example Result 3',
    content: 'This is yet another example search result.',
    imageUrl: 'https://placehold.co/600x400',
    createdAt: '2023-10-03',
    createdBy: 'User3'
  }
]

const Page = () => {
  const router = useRouter()

  const handleSearchClick = () => {
    router.push('/search')
  }

  return (
    <div className="min-h-screen --color-background">
      <TopBar onSearchClick={handleSearchClick} />
      <div className="py-4">
        {results.length > 0 ? (
          <div>
            {results.map((result, index) => (
              <DiaryCard
                key={index}
                title={result.title}
                content={result.content}
                imageUrl={result.imageUrl}
                createdAt={result.createdAt}
                createdBy={result.createdBy}
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

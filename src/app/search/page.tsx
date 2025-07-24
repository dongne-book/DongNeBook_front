'use client'

import {useState} from 'react'
import TopBar from '@/components/custom/search/TopBar'
import SearchBar from '@/components/custom/search/SearchBar'
import {title} from 'process'
import DiaryCard from '@/components/custom/search/DiaryCard'

const Page = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // Mock search results - replace with actual search logic
    setSearchResults([
      `Result 1 for "${query}"`,
      `Result 2 for "${query}"`,
      `Result 3 for "${query}"`
    ])
    setShowSearch(false)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
  }

  return (
    <div className="min-h-screen --color-background">
      <div className="p-4">
        <SearchBar onSearch={handleSearch} onBack={handleCloseSearch} />
      </div>
    </div>
  )
}

export default Page

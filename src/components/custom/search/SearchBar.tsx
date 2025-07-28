import {Search, X, ArrowLeft, ChevronLeft} from 'lucide-react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({onSearch}: SearchBarProps) => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleBack = () => {
    router.push('/explore')
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full gap-2 px-2 py-2 bg-primaryC">
      <Button
        variant="ghost"
        size="icon"
        className="items-center size-8"
        onClick={handleBack}>
        <ChevronLeft className="text-gray-600" />
      </Button>

      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="검색어를 입력하세요."
          autoFocus
          className="pr-8 text-sm text-gray-800 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-50"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onSearch(query)
            }
          }}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute w-6 h-6 transform -translate-y-1/2 right-1 top-1/2"
            onClick={handleClear}>
            <X className="w-4 h-4 text-gray-400" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default SearchBar

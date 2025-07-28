import {Search} from 'lucide-react'
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'

const TopBar = () => {
  const router = useRouter()
  const handleSearchClick = () => {
    router.push('/search')
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-primaryC">
      {/* Logo/Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-900">logo</h1>
      </div>

      <Button
        onClick={handleSearchClick}
        variant={'ghost'}
        className="size-8"
        size="icon"
        aria-label="Search">
        <Search className="w-5 h-5 text-gray-600" />
      </Button>
    </div>
  )
}

export default TopBar

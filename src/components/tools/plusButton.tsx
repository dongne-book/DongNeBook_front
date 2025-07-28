import {Plus} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function PlusButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed z-50 flex items-center justify-center w-12 h-12 rounded-full bottom-20 right-5 bg-primaryC">
        <Plus className="w-8 h-8 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>한 컷 올리기</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>오늘을 기록하기</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

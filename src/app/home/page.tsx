import {DiaryComponent} from '@/components/custom/home/DiaryComponent'
import {PampletCarousel} from '@/components/custom/home/PampletCarousel'
import {PostViewComponent} from '@/components/custom/home/PostViewComponent'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-10 p-4 overflow-y-auto overscroll-y-auto">
      <PampletCarousel />
      <DiaryComponent />
      <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-4">
        <span className="w-full text-2xl font-semibold text-white">오늘의 한 컷</span>
        <PostViewComponent />
      </div>
    </div>
  )
}

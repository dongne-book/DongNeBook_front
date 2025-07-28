import {DiaryComponent} from '@/components/custom/home/DiaryComponent'
import {PampletCarousel} from '@/components/custom/home/PampletCarousel'
import {PostViewComponent} from '@/components/custom/home/PostViewComponent'

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-primaryC flex-col p-4 gap-10 overflow-y-auto overscroll-y-auto">
      {/* <span>Hello World</span> */}
      {/* . */}
      <PampletCarousel />
      <DiaryComponent />
      <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-4">
        <span className="text-2xl font-semibold text-white w-full">오늘의 한 컷</span>
        <PostViewComponent />
      </div>
    </div>
  )
}

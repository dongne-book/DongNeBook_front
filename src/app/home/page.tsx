import { DiaryComponent } from "@/components/custom/home/DiaryComponent";
import { PampletCarousel } from "@/components/custom/home/PampletCarousel";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-primaryC flex-col p-4 gap-4 overflow-y-auto overscroll-y-auto">
      {/* <span>Hello World</span> */}
      {/* . */}
      {/* <PampletCarousel /> */}
      <DiaryComponent />
      <DiaryComponent />
    </div>
  )
}

import {Skeleton} from '@/components/ui/skeleton'

const DiaryCardSkeleton = () => {
  return (
    <div className="flex flex-row items-center w-full h-32 max-w-md px-2 py-1">
      <Skeleton className="w-full h-full" />
    </div>
  )
}

export default DiaryCardSkeleton

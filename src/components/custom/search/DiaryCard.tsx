import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {DiaryDetailDTO} from '@/lib/interface/diary'

const DiaryCard = ({diary}: {diary: DiaryDetailDTO}) => {
  return (
    <Card className="flex flex-row w-full h-32 gap-2 p-4 border-none rounded-none shadow-none">
      <div className="flex flex-col justify-between flex-grow">
        <CardHeader className="p-2">
          <CardTitle>{diary.title}</CardTitle>
          <CardDescription className="line-clamp-1">{diary.content}</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2 p-2">
          <p className="text-xs text-gray-500">{diary.createdBy.nickname}</p>
          <p className="text-xs text-gray-500">
            {new Date(diary.createdAt).toISOString().split('T')[0]}
          </p>
        </CardFooter>
      </div>
      <div className="flex-shrink-0 w-24 h-24">
        <img
          src="https://placehold.co/400"
          alt={diary.title}
          className="object-cover w-full h-full rounded"
        />
      </div>
    </Card>
  )
}

export default DiaryCard

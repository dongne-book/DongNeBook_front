import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface DiaryCardProps {
  title: string
  content: string
  imageUrl?: string
  createdAt?: string
  createdBy?: string
}

const DiaryCard = ({title, content, imageUrl, createdAt, createdBy}: DiaryCardProps) => {
  return (
    <Card className="flex flex-row gap-2 p-4 border-none rounded-none shadow-none">
      <div className="flex flex-col justify-between flex-grow">
        <CardHeader className="p-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2 p-2">
          <p className="text-xs text-gray-500">{createdBy}</p>
          <p className="text-xs text-gray-500">{createdAt}</p>
        </CardFooter>
      </div>
      {imageUrl && (
        <div className="flex-shrink-0 w-24 h-24">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full rounded"
          />
        </div>
      )}
    </Card>
  )
}

export default DiaryCard

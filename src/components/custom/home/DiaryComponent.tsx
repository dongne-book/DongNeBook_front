import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Card} from '@/components/ui/card'

export function DiaryComponent() {
  return (
    <Card className="w-full max-w-md mx-auto h-full my-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center w-full h-full flex-col gap-4">
        <div className="flex items-center gap-4 w-full h-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col items-start">
            <span className="text-lg font-semibold">사용자명</span>
            <span className="text-sm text-gray-500">위치</span>
          </div>
        </div>

        <img
          className="text-gray-800"
          src="https://cdn.imweb.me/upload/S20210927e14f9f0cf71bc/44851455a9c9e.png"
          alt="Diary Entry"
        />

        <div className="w-full h-full flex items-start justify-center flex-col gap-2">
          <span className="text-gray-600 text-sm">오늘은 정말 좋은 날이었어요!</span>
          <span className="text-gray-600 text-sm">
            오늘은 정말 좋은 날이었어요! 친구들과 함께 시간을 보내고, 맛있는 음식을
            먹었답니다. 하기 싫어요. 날씨도 맑고 기분도 좋았어요. 이런 날이
            계속되면 좋겠어요. 내일도 좋은 일이 있기를 바래요!
          </span>
        </div>
      </div>
    </Card>
  )
}

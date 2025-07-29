import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Card} from '@/components/ui/card'

export function DiaryComponent() {
  return (
    <Card className="w-full max-w-md mx-auto h-full p-4 bg-white shadow-lg rounded-lg">
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
          <span className="text-gray-600 text-sm">지영이 약속 가는 날..!</span>
          <span className="text-gray-600 text-sm">
            오늘은 내가 약속 가는 날이다. 근데 더워서 그런지 귀찮다. 나는 얼떨결에 프팀이
            되었다. 나의 우크라이나는 누굴까..
          </span>
        </div>
      </div>
    </Card>
  )
}

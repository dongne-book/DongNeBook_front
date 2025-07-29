'use client'

import {Home, Search, Map, BookOpen, User} from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  return (
    <div className="fixed bottom-0 flex flex-row w-full items-center px-6 max-w-[400px] h-[8%] bg-white justify-between gap-4 border-t border-gray-600 z-50">
      <Link href="/home" className={pathname === '/home' ? 'text-primaryC' : ''}>
        <Home />
      </Link>
      <Link href="/explore" className={pathname === '/explore' ? 'text-primaryC' : ''}>
        <Search />
      </Link>
      <Link href="/map" className={pathname === '/map' ? 'text-primaryC' : ''}>
        <Map />
      </Link>
      <Link href="/book" className={pathname === '/book' ? 'text-primaryC' : ''}>
        <BookOpen />
      </Link>
      <Link href="/user" className={pathname === '/user' ? 'text-primaryC' : ''}>
        <User />
      </Link>
    </div>
  )
}

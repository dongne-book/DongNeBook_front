import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import * as React from 'react'

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80'
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80'
  },
  {
    artist: 'Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80'
  },
  {
    artist: 'Vladimir',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80'
  }
]

export function PostViewComponent() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full h-full space-x-4 pb-4">
        {works.map(artwork => (
          <figure key={artwork.artist} className="shrink-0 w-[38%]">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[1/1] object-cover rounded-md w-full h-auto"
              />
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs break-words w-full whitespace-normal">
              Photo by{' '}
              <span className="text-foreground font-semibold">{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

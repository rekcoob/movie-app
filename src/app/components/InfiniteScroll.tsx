// components/InfiniteScroll.tsx
import React, { useEffect, useRef, ReactNode } from 'react'

interface InfiniteScrollProps<T> {
  data: T[]
  hasMore: boolean
  onLoadMore: () => void
  children: (items: T[]) => ReactNode
  className?: string
  endComponent?: ReactNode
}

export default function InfiniteScroll<T>({
  data,
  hasMore,
  onLoadMore,
  children,
  className = '',
  endComponent = <p>No More Items</p>,
}: InfiniteScrollProps<T>) {
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore()
        }
      },
      { threshold: 0.5 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [hasMore, onLoadMore])

  return (
    <>
      <div className={className}>{children(data)}</div>

      <div ref={observerTarget} className=''>
        {!hasMore && endComponent}
      </div>
    </>
  )
}

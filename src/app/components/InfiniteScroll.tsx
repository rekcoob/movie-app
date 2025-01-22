// components/InfiniteScroll.tsx
import React, { useEffect, useRef, ReactNode } from 'react'

interface InfiniteScrollProps<T> {
  data: T[]
  loading: boolean
  hasMore: boolean
  onLoadMore: () => void
  children: (items: T[]) => ReactNode
  className?: string
  loadingComponent?: ReactNode
  endComponent?: ReactNode
}

const InfiniteScroll = <T,>({
  data,
  loading,
  hasMore,
  onLoadMore,
  children,
  className = '',
  loadingComponent = <p>Loading more items...</p>,
  endComponent = <p>No more items to load</p>,
}: InfiniteScrollProps<T>) => {
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          onLoadMore()
        }
      },
      { threshold: 0.5 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [loading, hasMore, onLoadMore])

  return (
    <>
      <div className={className}>{children(data)}</div>

      <div ref={observerTarget} className=''>
        {loading && loadingComponent}
        {!hasMore && endComponent}
      </div>
    </>
  )
}

export default InfiniteScroll

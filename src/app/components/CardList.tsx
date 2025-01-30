// components/CardList.tsx
'use client'

import React, { useState } from 'react'
import InfiniteScroll from './InfiniteScroll'
import CardItem from './CardItem'
import { IBaseItem } from '@/app/types'

interface CardListProps<T extends IBaseItem> {
  initialData: T[]
  fetchFunction: (page: number) => Promise<{ results: T[] }>
  getImagePath: (item: T) => string | null
  getTitle: (item: T) => string
  getLinkPath: (item: T) => string
  getDate?: (item: T) => string
}

export default function CardList<T extends IBaseItem>({
  initialData,
  fetchFunction,
  getImagePath,
  getTitle,
  getLinkPath,
  getDate = () => '',
}: CardListProps<T>) {
  const [items, setItems] = useState<T[]>(initialData)
  const [page, setPage] = useState(2) // Start from page 2 since page 1 is initial data
  const [hasMore, setHasMore] = useState(true)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const loadItems = async (pageNum: number) => {
    try {
      setLoadingNextPage(true)
      const data = await fetchFunction(pageNum)

      if (data.results.length === 0) {
        setHasMore(false)
        return
      }
      setItems((prev) => [...prev, ...data.results])
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      setLoadingNextPage(false)
    }
  }

  const handleLoadMore = () => {
    if (!loadingNextPage && hasMore) {
      setPage((prev) => prev + 1)
      loadItems(page)
    }
  }

  return (
    <InfiniteScroll
      data={items}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
      className='list-container'
      endComponent={<p className='text-center'>No more items to load</p>}
    >
      {(items) =>
        items.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={getTitle(item)}
            imagePath={getImagePath(item)}
            linkPath={getLinkPath(item)}
            voteAverage={item.vote_average}
            date={getDate(item)}
          />
        ))
      }
    </InfiniteScroll>
  )
}

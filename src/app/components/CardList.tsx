// components/CardList.tsx
'use client'

import React, { useState } from 'react'
import InfiniteScroll from './InfiniteScroll'
import CardItem from './CardItem'
import Spinner from './Spinner'

interface BaseItem {
  id: number
  title?: string
  name?: string // for TV shows and actors
  poster_path?: string | null
  profile_path?: string | null // for actors
  vote_average?: number
  release_date?: string
  first_air_date?: string // for TV shows
  birthday?: string // for actors
}

interface CardListProps<T extends BaseItem> {
  initialData: T[]
  fetchFunction: (page: number) => Promise<{ results: T[] }>
  getImagePath: (item: T) => string | null
  getTitle: (item: T) => string
  getLinkPath: (item: T) => string
  getDate?: (item: T) => string
}

const CardList = <T extends BaseItem>({
  initialData,
  fetchFunction,
  getImagePath,
  getTitle,
  getLinkPath,
  getDate = () => '',
}: CardListProps<T>) => {
  const [items, setItems] = useState<T[]>(initialData)
  const [page, setPage] = useState(2) // Start from page 2 since page 1 is initial data
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadItems = async (pageNum: number) => {
    try {
      setLoading(true)
      const data = await fetchFunction(pageNum)

      if (data.results.length === 0) {
        setHasMore(false)
        return
      }

      setItems((prev) => [...prev, ...data.results])
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
    loadItems(page)
  }

  return (
    <InfiniteScroll
      data={items}
      loading={loading}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
      className='list-container'
      loadingComponent={<Spinner />}
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

export default CardList

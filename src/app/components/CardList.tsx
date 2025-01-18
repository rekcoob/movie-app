// components/CardList.tsx
'use client'

import React, { useEffect, useState, useCallback } from 'react'
import InfiniteScroll from './InfiniteScroll'
import CardItem from './CardItem'
import Spinner from './Spinner'

interface BaseItem {
  id: number
  title?: string
  name?: string // for TV shows and actors
  poster_path?: string
  profile_path?: string // for actors
  vote_average?: number
  release_date?: string
  first_air_date?: string // for TV shows
}

interface CardListProps<T extends BaseItem> {
  fetchFunction: (page: number) => Promise<{ results: T[] }>
  initialData?: T[]
  getImagePath: (item: T) => string
  getTitle: (item: T) => string
  getLinkPath: (item: T) => string
  getDate?: (item: T) => string
}

const CardList = <T extends BaseItem>({
  fetchFunction,
  initialData = [],
  getImagePath,
  getTitle,
  getLinkPath,
  getDate = () => '',
}: CardListProps<T>) => {
  const [items, setItems] = useState<T[]>(initialData)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadItems = useCallback(
    async (pageNum: number) => {
      try {
        setLoading(true)
        const data = await fetchFunction(pageNum)

        if (data.results.length === 0) {
          setHasMore(false)
          return
        }

        setItems((prev) =>
          pageNum === 1 ? data.results : [...prev, ...data.results]
        )
      } catch (error) {
        console.error('Error fetching items:', error)
      } finally {
        setLoading(false)
      }
    },
    [fetchFunction]
  )

  useEffect(() => {
    if (initialData.length === 0) {
      loadItems(1)
    }
  }, [initialData.length, loadItems])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
    loadItems(page + 1)
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

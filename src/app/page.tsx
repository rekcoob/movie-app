// app/page.tsx
import { fetchMovies, IMG_API } from './services/api'
import { Movie } from './types'
import CardItem from './components/CardItem'
import InfiniteScroll from './components/InfiniteScroll'

// This remains a server component
const HomePage = async () => {
  // Initial server-side fetch
  const data = await fetchMovies(1)
  const initialMovies: Movie[] = data.results

  return (
    <InfiniteScroll initialMovies={initialMovies}>
      {(movies) => (
        <div className='list-container'>
          {movies.map((movie) => (
            <CardItem
              key={`${movie.id}-${movie.title}`}
              id={movie.id}
              linkPath={`/movies/${movie.id}`}
              title={movie.title}
              imagePath={IMG_API + movie.poster_path}
              voteAverage={movie.vote_average}
              date={movie.release_date}
            />
          ))}
        </div>
      )}
    </InfiniteScroll>
  )
}
export default HomePage

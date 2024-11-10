export const formatVoteAverage = (vote: number) => `${(vote * 10).toFixed(2)}%`

export const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))

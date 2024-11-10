export const formatVoteAverage = (vote: number): string =>
  `${(vote * 10).toFixed(2)}%`

export const formatDate = (dateString: string): string =>
  //   new Intl.DateTimeFormat('en-US', {
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
    .format(new Date(dateString))
    .replace(',', '')

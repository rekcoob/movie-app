// export const formatVoteAverage = (vote: number): string =>
//   `${(vote * 10).toFixed(1)}%`

export const formatVoteAverage = (vote: number): string => {
  const formattedVote = (vote * 10).toFixed(1)
  return formattedVote.endsWith('.0')
    ? formattedVote.slice(0, -2) + '%'
    : formattedVote + '%'
}

export const formatDate = (dateString: string): string =>
  //   new Intl.DateTimeFormat('en-US', {
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
    .format(new Date(dateString))
    .replace(',', '')

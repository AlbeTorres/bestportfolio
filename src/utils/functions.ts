import type { post } from '../utils/type'
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  })
}

type filter = {
  filterOutDrafts: boolean
  filterOutFuturePost: boolean
  sortByDate: boolean
  limit: undefined | number
}

export function formatBlogposts(
  posts: post[],
  { filterOutDrafts = true, filterOutFuturePost = true, sortByDate = true, limit }: filter
) {
  const filteredPosts = posts.reduce((acc, p) => {
    const { draft, date } = p
    if (filterOutDrafts && draft) return acc

    if (filterOutFuturePost && new Date(date) > new Date()) return acc

    acc.push(p)

    return acc
  }, [] as post[])

  if (sortByDate) {
    filteredPosts.sort((a, b) => b.date.getTime() - a.date.getTime())
  }

  if (limit) {
    return filteredPosts.slice(0, limit)
  }

  return filteredPosts
}

export type post = {
  title: string
  image: {
    src: {
      src: string
      width: number
      height: number
      format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif'
    }
    alt: string
  }
  description?: string
  url?: string
  badge?: string
  tags: string[]
  target?: '_blank'
  author: string
  date: Date
  draft: boolean
}

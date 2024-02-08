// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    author: z.string(),
    draft: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
}

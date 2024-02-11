// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      author: z.string(),
      draft: z.boolean(),
      image: z.object({
        src: image().refine(img => img.width >= 1050, {
          message: 'Cover image must be at least 1050 pixels wide!',
        }),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
}

// const blogCollection = defineCollection({
//   type: 'content',
//   schema: z.object({ /* ... */ })
// });
// const newsletter = defineCollection({
//   type: 'content',
//   schema: z.object({ /* ... */ })
// });
// const authors = defineCollection({
//   type: 'data',
//   schema: z.object({ /* ... */ })
// });

// export const collections = {
//   'blog': blogCollection,
//   'newsletter': newsletter,
//   'authors': authors,
// };

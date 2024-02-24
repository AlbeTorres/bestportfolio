import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { slugify } from '../utils/functions'

const parser = new MarkdownIt()

export async function GET(context: { site: string }) {
  const posts = await getCollection('posts', p => {
    if (p.data.draft !== true && new Date(p.data.date) < new Date()) {
      return p
    }
  })
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'Albe Torres',
    description:
      'A passionate freelance fullstack software engineer based in Miami. With over three years of experience.',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      content: sanitizeHtml(parser.render(post.body)),

      description: post.data.description,
      link: `/posts/${slugify(post.data.title)}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}

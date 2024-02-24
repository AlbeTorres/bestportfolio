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
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },
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
      customData: `<media:content
      type="image/${post.data.image.src.format == 'jpg' ? 'jpeg' : 'png'}"
      width="${200}"
      height="${100}"
      medium="image"
      url="${context.site + post.data.image.src.src}" />
  `,
    })),
    customData: `<language>en-us</language>`,
  })
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  return rss({
    title: 'Steve Kim — Clinical AI Build Log',
    description: 'Why clinical AI fails at the bedside. 20 years as the end user.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/build-log/${post.id}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}

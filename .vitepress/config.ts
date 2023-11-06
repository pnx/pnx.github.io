import mdNamedCode from 'markdown-it-named-code-blocks';
import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from './theme/types'
import shiki from 'shiki'
import path from 'node:path'

const theme = await shiki.loadTheme(path.dirname(__filename) + '/arctic.json')

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "Shuffling Pixels",
  description: "This site is about computers and stuff related to computers also maybe other junk i find interesting.",
  cleanUrls: true,
  srcDir: "src",
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GTZ95TG0ES',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GTZ95TG0ES');",
    ],
  ],
  rewrites: {
    // 'posts/:date/:name/(.*)': 'posts/:date-:name.md',
  },
  themeConfig: {
    Blog : {
        postsPath: "src/posts",
    },
    Author: "Henrik Hautakoski",
    Email: "henrik.hautakoski@gmail.com",
    SocialLinks: {
        Github: "pnx",
        Twitter: "henkzmode"
    }
  },
  markdown: {
    theme: theme,
    lineNumbers: true,
    config(md) {
        md.use(mdNamedCode);
    },
  }
})

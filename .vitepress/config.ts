import mdNamedCode from 'markdown-it-named-code-blocks';
import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from './theme/types'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "Shuffling Pixels",
  description: "This site is about computers and stuff related to computers also maybe other junk i find interesting.",
  cleanUrls: true,
  srcDir: "src",
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
    lineNumbers: true,
    config(md) {
        md.use(mdNamedCode);
    },
  }
})

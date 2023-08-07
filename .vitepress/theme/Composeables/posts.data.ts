import { type SiteConfig, createContentLoader } from 'vitepress'
import type { ThemeConfig, Post } from '../types'
import { convertPost } from '../Support/blog'

const config = globalThis.VITEPRESS_CONFIG as SiteConfig<ThemeConfig>
const BlogConfig = config.site.themeConfig.Blog
const pattern = `${BlogConfig?.postsPath ?? '/posts'}/**/*.md`

const data: Post[] = []
export { data }

export default createContentLoader(pattern, {
    excerpt: "<!-- more -->",
    transform(raw) {
        return raw
            .map(convertPost)
            .sort((a, b) => b.date - a.date)
    },
});


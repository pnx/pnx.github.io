import { type Moment } from 'moment';

export type ThemeConfig = {
    Blog ?: {
        postsPath ?: string
        // See: https://momentjs.com/docs/#/displaying/format
        dateFormat ?: string
    }
    Author ?: string
    Email ?: string

    SocialLinks ?: {
        Github ?: string
        Twitter ?: string
    }

    //socialLinks: [
    //    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
}

export type Post = {
    title: string
    author: string
    url: string
    date ?: Moment | string
    tags ?: string[]
    excerpt ?: string
}

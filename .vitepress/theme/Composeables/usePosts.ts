
import { data } from './posts.data.js'
import { type Post } from '../types.js'

export function usePosts(category?: string | null) : Post[] {

    if (category) {
        return data.filter(post => post.tags?.indexOf(category) > -1)
    }
    return data
}

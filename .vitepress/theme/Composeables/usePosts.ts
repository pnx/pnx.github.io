
import { data } from './posts.data.js'
import { type Post } from '../types.js'

export function usePosts() : Post[] {
    return data
}

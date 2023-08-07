
import { type Post } from '../types.js'
import { useData, useRoute } from 'vitepress';
import { convertPost } from '../Support/blog.js';

export function usePost() : Post {
    const url = useRoute().path
    const frontmatter = useData().page.value.frontmatter
    return convertPost({ url, frontmatter });
}

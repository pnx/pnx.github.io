import moment from 'moment';
import { useData } from 'vitepress';
import type { ThemeConfig, Post } from '../types';

const parseDateFromUrl = (url:string) => {
    var match = url.match('\/[0-9]+\-[0-9]+\-[0-9]+\/');
    if (match !== null && match.length > 0) {
        return moment(match[0]);
    }
    return undefined;
};

const formatDate = (date: moment.Moment | string) => {
    const { theme } = useData<ThemeConfig>()
    const fmt = theme.value.Blog?.dateFormat ?? 'MMM D, Y';

    if (typeof(date) === "string") {
        date = moment(date);
    }
    return date.format(fmt);
};

const formatTags = (input ?: string | string[]) : string[] => {
    if (typeof(input) == "string") {
        return input.split(',');
    }
    return input || [];
};

type convertPostParams = {
    url: string
    frontmatter: Record<string, any>
    excerpt ?: string
}

const convertPost = ({url, frontmatter, excerpt} : convertPostParams) => ({
    title: frontmatter.title,
    author: frontmatter.author || "Unknown",
    date: parseDateFromUrl(url),
    tags: formatTags(frontmatter.categories),
    url,
    excerpt,
} as Post)

export {
    parseDateFromUrl,
    formatDate,
    formatTags,
    convertPost
}
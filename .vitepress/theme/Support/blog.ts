import moment from 'moment';
// import { useData } from 'vitepress';
// import type { ThemeConfig, Post } from '../types';
import type { Post } from '../types';

const parseDateFromUrl = (url:string) => {
    var match = url.match('\/[0-9]+\-[0-9]+\-[0-9]+\/');
    var value =match !== null && match.length > 0
        ? match[0]
        : "1970-01-01"
    return moment(value, "YYYY-MM-DD");
};

const formatDate = (date: moment.Moment | string) => {
    //const { theme } = useData<ThemeConfig>()
    //const fmt = theme.value.Blog?.dateFormat ?? 'MMM D, Y';
    const fmt = 'MMM D, Y';

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
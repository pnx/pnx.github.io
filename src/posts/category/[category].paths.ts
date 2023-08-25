import fs from 'fs';
import fm from 'front-matter';
import { globSync } from 'glob';

export default {
    async paths() {
        const onlyUnique = (value : any, index : number, array : any) => array.indexOf(value) == index;

        // This is some crazy stuff :)
        return globSync('src/posts/**/*.md')
            .map(file => fm<any>(fs.readFileSync(file, "utf-8")).attributes.categories)
            .filter(c => c !== undefined)
            .flatMap(cat => cat)
            .filter(onlyUnique)
            .flatMap(cat => [ { params: { category: cat } } ]);
    },
}
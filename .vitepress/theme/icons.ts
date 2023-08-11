import { library } from '@fortawesome/fontawesome-svg-core'

// Brand
import {
    faGithub,
    faTwitter,
    faPhp,
    faLaravel,
    faCss3,
    faSass,
    faLess,
    faHtml5,
    faVuejs,
    faGolang,
    faLinux,
    faGit,
} from '@fortawesome/free-brands-svg-icons';

// Regular
import { faClock } from '@fortawesome/free-regular-svg-icons';

// Solid
import { faTags } from '@fortawesome/free-solid-svg-icons';

// Custom
import faRedis from './icons/redis';
import faMysql from './icons/mysql';
import faCpp from './icons/cpp';

library.add(faGithub, faTwitter, faPhp, faLaravel, faCss3, faSass, faLess,
    faHtml5, faVuejs, faGolang, faLinux, faGit, faRedis, faMysql, faCpp, faClock, faTags);

import "./types.ts"
import "./icons.ts"
// https://vitepress.dev/guide/custom-theme
import { EnhanceAppContext } from "vitepress"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ProfilePicture from './Components/ProfilePicture.vue';
import Layout from './Layout.vue'
import './scss/style.scss'

export default {
    Layout,
    enhanceApp(ctx: EnhanceAppContext) {
        ctx.app.component('font-awesome-icon', FontAwesomeIcon)
        ctx.app.component('ProfilePicture', ProfilePicture)
    }
}


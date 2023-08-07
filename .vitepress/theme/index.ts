
import "./types.ts"
// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './scss/style.scss'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}


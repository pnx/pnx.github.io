<script setup lang="ts">
import { useData } from 'vitepress'
import GithubLink from './Components/GithubLink.vue';
import TwitterLink from './Components/TwitterLink.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page } = useData()
</script>

<template>
<footer class="site-footer">

<div class="container">

    <h2 class="footer-heading">{{ site.title }}</h2>

    <div class="footer-col-wrapper">

        <div class="footer-col footer-col-1">
            <ul class="contact-list">
                <li v-if="site.themeConfig.Author">{{ site.themeConfig.Author }}</li>
                <li v-if="site.themeConfig.Email"><a href="mailto:{{ site.themeConfig.Email }}">{{ site.themeConfig.Email }}</a></li>
            </ul>
        </div>

        <div class="footer-col footer-col-2">
            <ul v-if="site.themeConfig.SocialLinks" class="social-media-list">
                <li v-if="site.themeConfig.SocialLinks.Github">
                    <GithubLink :username="site.themeConfig.SocialLinks.Github" />
                </li>

                <li v-if="site.themeConfig.SocialLinks.Twitter">
                    <TwitterLink :username="site.themeConfig.SocialLinks.Twitter" />
                </li>
            </ul>
        </div>

        <div class="footer-col footer-col-3">
            <p>{{ site.description }}</p>
        </div>
    </div>

</div>

</footer>

</template>

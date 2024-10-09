<template>
    <footer id="contacts-section" class="mx-auto py-10 mb-40 lg:py-0 lg:w-10/12">
        <h3 class="text-button mb-10">// contacts</h3>
        <div class="flex">
            <div class="md:w-1/2">
                <a :href="'mailto:' + miscStore.myEmail" class="text-secondary">{{ miscStore.myEmail }}</a>
                <div class="flex gap-4 mt-4">
                    <IconsGithub :link="miscStore.gitHub" :width="'20'" :fillColor="'#c1c1c1'"/>
                    <IconsLinkedin :link="miscStore.linkedin" :width="'20'" :fillColor="'#c1c1c1'"/>
                    <IconsInsta :link="miscStore.insta" :width="'20'" :fillColor="'#c1c1c1'"/>
                </div>
            </div>
            <p class="text-secondary">
                Designed on Figma. FrontEnd built with Nuxt.js, <br>BackEnd built with Laravel.<br>
                <span v-if="currentYear > 2024">2024 - </span>{{ currentYear }}
            </p>
        </div>
    </footer>
</template>

<script setup>
import { useMiscStore } from '~/store/misc';

const miscStore = useMiscStore();

let currentYear = new Date().getFullYear();
</script>
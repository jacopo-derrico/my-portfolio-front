<template>
  <section class="flex mx-auto py-10 my-[100px] flex-wrap lg:py-0 lg:w-10/12 lg:justify-between">
    <div class="flex-initial pe-8 lg:w-1/2">
      <div>
        <a class="text-secondary secondary-font flex" @click="$router.back()">
          <IconsBackArrow/> back</a>
      </div>
      <h2 class="text-button lowercase mb-2">// {{ project.title }}</h2>
      <span v-if="project.date" class="text-primary secondary-font me-6">{{ project.date }}</span>
      <span v-if="project.company" class="text-primary secondary-font">{{ project.company }}</span>
      <div v-if="project.collaborators" class="mt-3">
        <span v-for="(collab) in project.collaborators"  :key="collab.indexOf">
          <a :href="`${collab.url}`" rel="noreferrer noopener" target="_blank" class="text-secondary secondary-font">{{ collab.name }}</a>
        </span>
      </div>
      <div class="flex gap-2 mt-6">
        <span v-for="(cat) in project.categories" :key="cat.indexOf" class="category pill-type">
          {{ cat }}
        </span>
      </div>
      <div class="flex gap-2 flex-wrap mt-4">
        <span v-for="(tag) in project.technologies" :key="tag.indexOf" class="technology-singlePage pill-type">
          {{ tag }}
        </span>
      </div>
      <div>
        <p class="text-secondary mt-12">
          {{ project.description }}
        </p>
      </div>
    </div>
    <div class="flex-initial ps-8 lg:w-1/2">
      <div class="flex justify-end mb-6">
        <a v-if="project.githubUrl" :href="`${project.githubUrl}`" rel="noreferrer noopener" target="_blank" class="text-secondary secondary-font me-6">GitHub <svg
            class="inline" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px"
            fill="#fff">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
        <a v-if="project.demoUrl" :href="`${project.demoUrl}`" rel="noreferrer noopener" target="_blank" class="text-secondary secondary-font">visit <svg
            class="inline" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px"
            fill="#fff">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
      </div>
      <div class="columns-2 md:columns-2 gap-4 space-y-4">
        <div v-for="(image) in project.images" :key="image.indexOf">
          <img class="w-full rounded-xl shadow" :src="`${image}`" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { usePortfolioStore } from '~/store/portfolio'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const portfolio = usePortfolioStore();
  const slug = route.params.slug;
  const project = portfolio.projects.find(proj => proj.slug === slug);

  useSeoMeta({
    title: project.title,
    ogTitle: project.title,
    description: project.description,
    ogDescription: project.description,
    ogImage: project.images[1],
    twitterCard: 'summary_large_image',
  })
</script>
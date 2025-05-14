<template>
  <section class="flex lg:py-10 my-[100px] flex-wrap px-4 mx-auto lg:px-0 lg:w-10/12 lg:justify-between">
    <div class="flex-initial lg:pe-8 lg:w-1/2">
      <div>
        <a class="text-secondary secondary-font flex mb-3 lg:mb-0" @click="$router.back()">
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
      <div class="flex gap-2 mt-6 w-fit">
        <span v-for="(cat) in project.categories" :key="cat.indexOf" class="category pill-type">
          {{ cat }}
        </span>
      </div>
      <div class="flex gap-2 flex-wrap mt-4 w-fit">
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
    <div class="flex-initial mt-10 lg:mt-0 lg:ps-8 lg:w-1/2">
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
      <div class="columns-2 gap-4 space-y-4">
        <div v-for="(image) in project.images" :key="image.indexOf">
          <NuxtImg class="w-full rounded-xl shadow cursor-hover" :src="`${image}`" :alt="`${project.title} image`" @click="openOverlay(image)" sizes="sm:180px md:350px lg:190px xl:276" format="webp"/>
        </div>
      </div>
    </div>
  <div v-if="isOverlayOpen" class="absolute z-50 top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center">
    <svg @click="closeOverlay" class="absolute top-3 right-3 cursor-hover" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    <img :src="overImg" class="max-w-[90%] max-h-[90%]" @click.stop>
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
  });

  const isOverlayOpen = ref(false);
  const overImg = ref('');

  const openOverlay = (imgUrl) => {
    isOverlayOpen.value = true;
    overImg.value = imgUrl;
    document.body.classList.add('overflow-hidden');
  }

  const closeOverlay = () => {
    isOverlayOpen.value = false;
    document.body.classList.remove('overflow-hidden');
  };

</script>
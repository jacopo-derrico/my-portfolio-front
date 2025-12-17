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
      <div class="grid grid-cols-2 2xl:grid-cols-4 gap-4 auto-rows-auto">
        <div v-for="(image, index) in project.images" :key="image.indexOf" :class="wideImages.includes(image) ? 'col-span-2' : ''">
          <NuxtImg class="w-full h-full object-cover rounded-xl shadow cursor-hover" :src="`${image}`" :alt="`${project.title} image`" @click="() => showImg(index)" @load="(e) => handleImageLoad(e, image)" sizes="sm:180px md:350px lg:190px xl:276" format="webp"/>
        </div>
        <VueEasyLightbox
          :visible="visibleRef"
          :imgs="project.images"
          :index="indexRef"
          :rotateDisabled="true"
          :moveDisabled="true"
          @hide="onHide"
        >
        </VueEasyLightbox>
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
  const wideImages = ref([]);

  // handle wider images based on aspect ratio
  const handleImageLoad = (event, imageSrc) => {
    if (!event?.target) return;
    
    const imgElement = event.target;
    
    // Ensure naturalWidth and naturalHeight are available
    if (!imgElement.naturalWidth || !imgElement.naturalHeight) return;
    
    const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
    // If width is greater than height (landscape/horizontal), span 2 columns
    if (aspectRatio > 1) {
      if (!wideImages.value.includes(imageSrc)) {
        wideImages.value = [...wideImages.value, imageSrc];
      }
    }
  };

  const visibleRef = ref(false);
  const indexRef = ref(0);

  const showImg = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
  };
  const onHide = () => (visibleRef.value = false);

  useSeoMeta({
    title: project.title,
    ogTitle: project.title,
    description: project.description,
    ogDescription: project.description,
    ogImage: project.images[1],
    twitterCard: 'summary_large_image',
  });

</script>


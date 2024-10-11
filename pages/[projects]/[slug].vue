<template>
    <section class="flex mx-auto py-10 my-[100px] flex-wrap lg:py-0 lg:w-10/12 lg:justify-between">
        <div class="flex-initial pe-8 lg:w-1/2">
            <h2 class="text-button lowercase mb-2">// {{ projectData.title }}</h2>
            <span v-if="projectData.date" class="text-primary secondary-font">{{ projectData.date }}</span>
            <span v-if="projectData.company" class="text-primary secondary-font">{{ projectData.company }}</span>
            <div class="flex gap-2 mt-6">
                <span v-for="(cat, index) in projectData.categories" class="category pill-type">
                    {{ cat.name }}
                </span>
            </div>
            <div class="flex gap-2 flex-wrap mt-4">
                <span v-for="(tag, index) in projectData.technologies" class="technology-singlePage pill-type">
                    {{ tag.name }}
                </span>
            </div>
            <div>
                <p class="text-secondary mt-12">
                    {{ projectData.description }}
                </p>
            </div>
        </div>
        <div  class="flex-initial ps-8 lg:w-1/2">
            <div v-for="image in projectData.images">
                <img class="w-full rounded-xl shadow" :src="`${portfolioStore.backUrl}/storage/${project.image_path}`" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { usePortfolioStore } from '~/store/portfolio'

const portfolioStore = usePortfolioStore()
const isLoading = ref(true)
const error = ref(null)

watch(() => portfolioStore.singleProjectData, (newData) => {
  isLoading.value = false
}, { immediate: true })

// Fetch single project data when the component mounts
async function fetchSingleProject() {
  try {
    const projectData = await portfolioStore.fetchSingleProject()
  } catch (error) {
    console.error('Error fetching project data:', error)
    error.value = 'Failed to load project data'
  }
}

fetchSingleProject()

// Cancel the request if the component unmounts
onMounted(() => {
  return () => {
    // Cancel the ongoing request
    cancelRequest()
  }
})
</script>
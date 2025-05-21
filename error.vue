<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

// Set proper status code
definePageMeta({
  layout: 'error'
})

useHead({
  title: `Error ${props.error.statusCode || '500'}`,
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<template>
  <div id="error-page" class="w-full h-[100vh] flex flex-col justify-center align-items-center">
    <div class="my-auto text-center">
      <h1 class="text-9xl mb-5">{{ error.statusCode }}</h1>
      <p v-if="error.statusMessage" class="mb-32">{{ error.statusMessage }}</p>
      <a href="/">
        <button class="text-button uppercase btn-style py-3 px-5">
          _go back home
        </button>
      </a>
    </div>
  </div>
</template>
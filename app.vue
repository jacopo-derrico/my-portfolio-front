<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage class="mx-6 lg:mx-auto lg:max-w-5xl" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - DeJa',
})
</script>
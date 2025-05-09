<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - DeJa',
})
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage class="mx-6 md:mx-0" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - DeJa',
})
</script>
<script setup>
const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
    <div class="language-switcher">
        <!-- Current language -->
        <div class="current-language" >
          _{{ $i18n.locale }}
          <!-- Dropdown list -->
          <div class="language-dropdown">
            <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
              _{{ locale.code }}
            </NuxtLink>
          </div>
        </div>
    </div>
</template>
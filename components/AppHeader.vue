<template>
    <header class="fixed top-0 w-full z-50">
        <div class="flex justify-between items-center my-4 mx-auto py-10 lg:py-0 lg:w-10/12">
            <span class="text-primary w-1/4">
                <!-- <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">
                    {{ locale.name }}
                </a> -->
                <LangSwitcher />
            </span>
            <AppLogo class="w-1/2"/>
            <span class="text-accent w-1/4 text-end">
                _{{ miscStore.currentSection?.sectionName ?? 'about' }}
            </span>
        </div>
    </header>
</template>

<script setup>
    import { useMiscStore } from '~/store/misc';

    const miscStore = useMiscStore();

    // const { locale, locales } = useI18n()
    // const switchLocalePath = useSwitchLocalePath()

    // const availableLocales = computed(() => {
    //     return locales.value.filter(i => i.code !== locale.value)
    // })
</script>
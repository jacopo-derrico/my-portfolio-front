<template>
    <header class="fixed top-0 w-full z-50">
        <div class="flex mx-6 lg:mx-auto justify-between items-center my-4 lg:px-0 lg:max-w-5xl">
            <span class="text-primary w-1/4">
                <!-- _lang -->
            </span>
            <AppLogo class="h-[40px] md:h-[59px] w-1/2"/>
            <span class="text-accent w-1/4 text-end">
                <span v-if="isHomePage">
                    _{{ miscStore.currentSection?.sectionName ?? 'about' }}
                </span> 
            </span>
        </div>
    </header>
</template>

<script setup>
    import { useMiscStore } from '~/store/misc';
    const route = useRoute();

    // Check if current route is homepage ("/")
    const isHomePage = computed(() => route.path === '/');

    const miscStore = useMiscStore();
</script>
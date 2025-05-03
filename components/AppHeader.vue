<template>
    <header class="fixed top-0 w-full z-50">
        <div class="flex justify-between items-center my-4 mx-auto py-10 lg:py-0 lg:w-10/12">
            <span class="text-primary w-1/4">
                <!-- _lang -->
            </span>
            <AppLogo class="w-1/2"/>
            <span class="text-accent w-1/4 text-end">
                _{{ miscStore.currentSection.sectionName }}
            </span>
        </div>
    </header>
</template>

<script setup>
    import { useMiscStore } from '~/store/misc';

    const miscStore = useMiscStore();
</script>
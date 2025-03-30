<template>
    <header class="fixed top-0 w-full">
        <div class="flex justify-between items-center my-8 mx-auto py-10 lg:py-0 lg:w-10/12">
            <span class="text-primary">
                _lang
            </span>
            <AppLogo />
            <span class="text-accent">
                _{{ miscStore.currentSection }}
            </span>
        </div>
    </header>
</template>

<script setup>
    import { useMiscStore } from '~/store/misc';

    const miscStore = useMiscStore();
</script>
<template>
    <div class="text-primary">
        {{ portfolioStore.singleProjectData.title }} titolo
    </div>
</template>

<script setup>
    import { usePortfolioStore } from '~/store/portfolio';

    const portfolioStore = usePortfolioStore();

    try {
        portfolioStore.fetchSingleProject();
    } catch (error) {
        console.error('Error fetching project data:', error);
    }

    const projectData = portfolioStore.singleProjectData

</script>
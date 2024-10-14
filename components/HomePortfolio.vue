<template>
    <section id="portfolio-section" class="mx-auto py-10 my-[200px] lg:py-0 lg:w-10/12">
        <h3 class="text-button mb-10">// portfolio</h3>
        <div class="columns-2 md:columns-4 gap-4 space-y-4">
            <!-- <NuxtLink v-for="project in portfolioStore.projects" :to="`/projects/${project.slug}`" :key="project.id" class="relative hover-info pb-4" :onclick="portfolioStore.singleProject = project.id">
                <img class="w-full rounded-xl shadow"
                    :src="`${portfolioStore.backUrl}/storage/${project.cover_path}`" alt="">
                <div class="absolute bottom-0 left-0 top-0 right-0 bg-black bg-opacity-80 flex flex-col-reverse p-4 hidden-info">
                    <div class="flex gap-2 flex-wrap">
                        <span v-for="(tag, index) in project.technologies" class="technology pill-type">
                            {{tag.name}}
                        </span>
                    </div>
                    <h6 class="mb-2 text-primary">
                        _{{project.title}}
                    </h6>
                    <div class="flex gap-2 mb-auto">
                        <span v-for="(cat, index) in project.categories" class="category pill-type">
                            {{cat.name}}
                        </span>
                    </div>
                </div>
            </NuxtLink> -->
        </div>
    </section>
</template>

<script setup>
    import { usePortfolioStore } from '~/store/portfolio';

    const portfolioStore = usePortfolioStore();

    try {
        portfolioStore.fetchProjects();
    } catch (error) {
        console.error('Error fetching projects:', error);
    }

</script>
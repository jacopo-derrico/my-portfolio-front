<template>
    <section id="portfolio-section" data-section-number="03" class="mx-auto py-10 my-[200px] lg:py-0 lg:w-10/12">
        <h3 class="text-button mb-10">// portfolio</h3>
        <div class="columns-2 lg:columns-3 gap-4 space-y-4">
            <div v-for="project in portfolio.projects" :key="project.id">
                <NuxtLink class="relative hover-info block mb-4 overflow-hidden rounded-xl" :to="`/projects/${project.slug}`" :onclick="portfolio.singleProject = project.id">
                    <NuxtImg :src="project.images[0]" :alt="`${project.title} - cover image`" class="w-full h-full rounded-xl shadow" sizes="sm:180px md:350px lg:240px" loading="lazy" format="webp" />
                    <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col-reverse p-2 md:p-4 hidden-info rounded-xl">
                        <div class="hidden md:flex gap-2 flex-wrap">
                            <span v-for="(tag) in project.technologies" :key="tag.indexOf" class="technology pill-type">
                                {{tag}}
                            </span>
                        </div>
                        <h6 class="mb-2 text-primary">
                            _{{project.title}}
                        </h6>
                        <div class="flex gap-2 mb-auto flex-wrap">
                            <span v-for="(cat) in project.categories" :key="cat.indexOf" class="category pill-type">
                                {{cat}}
                            </span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { usePortfolioStore } from '~/store/portfolio';

    const portfolio = usePortfolioStore();

</script>
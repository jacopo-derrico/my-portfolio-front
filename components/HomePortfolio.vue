<template>
    <section id="portfolio-section" data-section-number="03" class="mx-auto py-10 my-[200px] lg:py-0 lg:w-10/12">
        <h3 class="text-button mb-10">// portfolio</h3>
        <div class="columns-2 md:columns-3 gap-4 space-y-4">
            <div v-for="project in portfolio.projects" :key="project.id">
                <NuxtLink class="relative hover-info d-block mb-4" :to="`/projects/${project.slug}`" :onclick="portfolio.singleProject = project.id">
                    <img class="w-full h-full rounded-xl shadow"
                        :src="`${project.images[0]}`" alt="">
                    <div class="absolute bottom-0 left-0 top-0 right-0 bg-black bg-opacity-80 flex flex-col-reverse p-4 hidden-info">
                        <div class="flex gap-2 flex-wrap">
                            <span v-for="(tag) in project.technologies" :key="tag.indexOf" class="technology pill-type">
                                {{tag}}
                            </span>
                        </div>
                        <h6 class="mb-2 text-primary">
                            _{{project.title}}
                        </h6>
                        <div class="flex gap-2 mb-auto">
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
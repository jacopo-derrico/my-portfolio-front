<template>
    <section id="portfolio-section" data-section-number="03" class="mx-auto py-10 my-[200px] lg:py-0 lg:w-10/12">
        <h3 class="text-button mb-10">// portfolio</h3>
        <div class="columns-2 lg:columns-3 2xl:columns-4 gap-4 space-y-4">
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

            <!-- wp test -->
            <div v-for="post in data" :key="post.slug">
                <NuxtLink class="relative hover-info block mb-4 overflow-hidden rounded-xl" :to="`/projects/${post.slug}`">
                    <NuxtImg v-if="post.images && post.images[0]" :src="post.images[0]" :alt="`${post.title} - cover image`" class="w-full h-full rounded-xl shadow" sizes="sm:180px md:350px lg:240px" loading="lazy" format="webp" />
                    <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col-reverse p-2 md:p-4 hidden-info rounded-xl">
                        <div class="hidden md:flex gap-2 flex-wrap">
                            <span v-for="(tag) in post.technologies" :key="tag.indexOf" class="technology pill-type">
                                 {{tag}}
                            </span>
                        </div>
                        <h6 class="mb-2 text-primary">
                            _{{post.title}}
                        </h6>
                        <div class="flex gap-2 mb-auto flex-wrap">
                            <span v-for="(cat) in post.categories" :key="cat.indexOf" class="category pill-type">
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
    const config = useRuntimeConfig();
    const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
    method: 'post',
    body: {
        query: `
            query Projects {
                projects {
                    nodes {
                    slug
                    databaseId
                    content
                    portfolioProjects {
                        githubLink
                        imageUrls
                        websiteLink
                        collaborator1 {
                            name
                            link
                        }
                        collaborator2 {
                            name
                            link
                        }
                        client
                        year
                    }
                    postSeo {
                        seoTitle
                        seoDescription
                    }
                    date
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    title
                    tags {
                        nodes {
                            name
                        }
                    }
                    databaseId
                    categories {
                        nodes {
                        name
                        }
                    }
                    }
                    pageInfo {
                        endCursor
                        startCursor
                        hasNextPage
                        hasPreviousPage
                    }
                }
            }`
    },
        transform(data){
        return data.data.projects.nodes.map(post => ({
            ...post,
            images: post.featuredImage?.node?.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
            technologies: post.tags?.nodes?.map(tag => tag.name) || [],
            categories: post.categories?.nodes?.map(cat => cat.name) || []
        }));
    }
    });
</script>
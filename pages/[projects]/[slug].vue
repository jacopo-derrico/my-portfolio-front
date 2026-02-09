<template>
  <section class="flex lg:py-10 my-[100px] flex-wrap px-4 mx-auto lg:px-0 lg:w-10/12 lg:justify-between">
    <div class="flex-initial lg:pe-8 lg:w-1/2">
      <div>
        <a class="text-secondary secondary-font flex mb-3 lg:mb-0" @click="$router.back()">
          <IconsBackArrow/> back</a>
      </div>
      <h2 class="text-button lowercase mb-2">// {{ project.title }}</h2>
      <span v-if="project.year" class="text-primary secondary-font me-6">{{ project.year }}</span>
      <span v-if="project.company" class="text-primary secondary-font">{{ project.company }}</span>
      <div v-if="project.collaborators" class="mt-3">
        <span v-for="(collab, i) in project.collaborators" :key="i">
          <a :href="`${collab.url}`" rel="noreferrer noopener" target="_blank" class="text-secondary secondary-font">{{ collab.name }}</a>
        </span>
      </div>
      <div class="flex gap-2 mt-6 w-fit">
        <span v-for="(cat) in project.categories" :key="cat.indexOf" class="category pill-type">
          {{ cat }}
        </span>
      </div>
      <div class="flex gap-2 flex-wrap mt-4 w-fit">
        <span v-for="(tag) in project.technologies" :key="tag.indexOf" class="technology-singlePage pill-type">
          {{ tag }}
        </span>
      </div>
      <div>
        <div v-if="project.isWordPressPost" class="text-secondary mt-12 prose prose-invert max-w-none" v-html="project.description"></div>
        <p v-else class="text-secondary mt-12">
          {{ project.description }}
        </p>
      </div>
    </div>
    <div class="flex-initial mt-10 lg:mt-0 lg:ps-8 lg:w-1/2">
      <div class="flex justify-end mb-6">
        <a v-if="project.githubUrl" :href="`${project.githubUrl}`" rel="noreferrer noopener" target="_blank" class="text-secondary secondary-font me-6">GitHub <svg
            class="inline" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px"
            fill="#fff">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
        <a v-if="project.demoUrl" :href="`${project.demoUrl}`" rel="noreferrer noopener" target="_blank" class="text-secondary secondary-font">visit <svg
            class="inline" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px"
            fill="#fff">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
      </div>
      <div class="grid grid-cols-2 2xl:grid-cols-4 gap-4 auto-rows-auto">
        <div v-for="(image, index) in project.images" :key="image.indexOf" :class="wideImages.includes(image) ? 'col-span-2' : ''">
          <NuxtImg class="w-full h-full object-cover rounded-xl shadow cursor-hover" :src="`${image}`" :alt="`${project.title} image`" @click="() => showImg(index)" @load="(e) => handleImageLoad(e, image)" sizes="sm:180px md:350px lg:190px xl:276" format="webp"/>
        </div>
        <VueEasyLightbox
          :visible="visibleRef"
          :imgs="project.images"
          :index="indexRef"
          :rotateDisabled="true"
          :moveDisabled="true"
          @hide="onHide"
        >
        </VueEasyLightbox>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { usePortfolioStore } from '~/store/portfolio'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const config = useRuntimeConfig();

  const slug = route.params.slug; 
  let project = ref(null);
  
  // fetch projects from WordPress
  const { data: postData } = await useFetch(config.public.wordpressUrl, {
    method: 'post',
      body: {
        query: `
          query ProjectBySlug($slug: ID!) {
            project(id: $slug, idType: SLUG) {
              id
              title
              slug
              date
              content
              databaseId
              featuredImage {
                node {
                  sourceUrl
                }
              }
              tags {
                nodes {
                  name
                }
              }
              categories {
                nodes {
                  name
                }
              }
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
            }
          }
        `,
        variables: {
          slug: slug
        }
      },
      transform(data) {
        return data.data.project;
      }
    });
    
    if (postData.value) {
      // Transform WordPress post to match portfolio project structure
      project = {
        title: postData.value.title,
        slug: postData.value.slug,
        date: new Date(postData.value.date).toLocaleDateString(),
        description: postData.value.content,
        cover: postData.value.featuredImage?.node?.sourceUrl || null,
        images: (postData.value.portfolioProjects?.imageUrls || '')
                  .split(', ')
                  .filter(e => e !== '')
                  .map(e => config.public.wordpressBaseUrl + e),
        githubUrl: postData.value.portfolioProjects?.githubLink,
        demoUrl: postData.value.portfolioProjects?.websiteLink,
        technologies: postData.value.tags?.nodes?.map(tag => tag.name) || [],
        categories: postData.value.categories?.nodes
              ?.filter(cat => {
                  const lowerName = cat.name.toLowerCase().trim();
                  return lowerName !== 'portfolio';
              })
              .map(cat => cat.name) || [],
        company: postData.value.portfolioProjects?.client || '',
        collaborators: [
          postData.value.portfolioProjects?.collaborator1?.name ? {
            name: postData.value.portfolioProjects.collaborator1.name,
            url: postData.value.portfolioProjects.collaborator1.link
          } : null,
          postData.value.portfolioProjects?.collaborator2?.name ? {
            name: postData.value.portfolioProjects.collaborator2.name,
            url: postData.value.portfolioProjects.collaborator2.link
          } : null,
        ].filter(Boolean),
        year: postData.value.portfolioProjects?.year || '',
        isWordPressPost: true,
        seoTitle: postData.value.seoTitle || '',
        seoDescription: postData.value.seoDescription || ''
      };
    }
  
  // If project not found in portfolio store or WordPress, show 404
  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found'
    });
  }
  
  const wideImages = ref([]);

  // handle wider images based on aspect ratio
  const handleImageLoad = (event, imageSrc) => {
    if (!event?.target) return;
    
    const imgElement = event.target;
    
    // Ensure naturalWidth and naturalHeight are available
    if (!imgElement.naturalWidth || !imgElement.naturalHeight) return;
    
    const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
    // If width is greater than height (landscape/horizontal), span 2 columns
    if (aspectRatio > 1) {
      if (!wideImages.value.includes(imageSrc)) {
        wideImages.value = [...wideImages.value, imageSrc];
      }
    }
  };

  const visibleRef = ref(false);
  const indexRef = ref(0);

  const showImg = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
  };
  const onHide = () => (visibleRef.value = false);

  const siteBase = config.public.siteUrl || config.public.wordpressBaseUrl || '';
  const pageUrl = siteBase ? new URL(route.fullPath || '/', siteBase).toString() : route.fullPath || '';

  const ogImage = project.cover || (project.images && project.images.length ? project.images[0] : null);
  const imageAlt = `${project.seoTitle || project.title} cover image`;

  // plain description for meta and JSON-LD (strip HTML)
  const stripHtml = (html = '') => {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 320);
  };
  const plainDescription = stripHtml(project.seoDescription || '') || stripHtml(project.description || '');

  // base meta (title/desc/og/twitter)
  useHead({
    title: project.seoTitle || project.title,
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    meta: [
      { name: 'description', content: project.seoDescription || plainDescription },

      // Open Graph basics
      { property: 'og:locale', content: config.public.siteLocale || 'en_US' },
      { property: 'og:site_name', content: config.public.siteName || '' },
      { property: 'og:type', content: project.isWordPressPost ? 'article' : 'website' },
      { property: 'og:title', content: project.seoTitle || project.title },
      { property: 'og:description', content: project.seoDescription || plainDescription },
      ...(ogImage ? [{ property: 'og:image', content: ogImage }] : []),
      ...(ogImage ? [{ property: 'og:image:alt', content: imageAlt }] : []),
      { property: 'og:url', content: pageUrl },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: project.seoTitle || project.title },
      { name: 'twitter:description', content: project.seoDescription || plainDescription },
      ...(ogImage ? [{ name: 'twitter:image', content: ogImage }] : []),
      ...(ogImage ? [{ name: 'twitter:image:alt', content: imageAlt }] : []),

      // Article-specific metadata (if WP post)
      ...(project.isWordPressPost && postData?.value?.date ? [
        { property: 'article:published_time', content: new Date(postData.value.date).toISOString() }
      ] : []),
      ...(project.isWordPressPost && postData?.value?.modified ? [
        { property: 'article:modified_time', content: new Date(postData.value.modified).toISOString() }
      ] : []),
      ...(project.technologies?.length ? [{ property: 'article:tag', content: project.technologies.join(', ') }] : []),
      ...(project.company ? [{ property: 'article:author', content: project.company }] : []),
    ],
    // Add JSON-LD
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': project.isWordPressPost ? 'Article' : 'WebPage',
          headline: project.seoTitle || project.title,
          description: project.seoDescription || plainDescription,
          image: ogImage ? [ogImage] : undefined,
          author: project.company ? { '@type': 'Person', name: project.company } : undefined,
          datePublished: project.isWordPressPost && postData?.value?.date ? new Date(postData.value.date).toISOString() : undefined,
          dateModified: project.isWordPressPost && postData?.value?.modified ? new Date(postData.value.modified).toISOString() : undefined,
          mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          publisher: config.public.siteName ? {
            '@type': 'Organization',
            name: config.public.siteName
          } : undefined
        })
      }
    ]
  });

  // attempt to fetch image dimensions and update meta with og:image:width/height (improves some social previews)
  if (ogImage && process.client) {
    const loadImageDims = (src) => new Promise((res) => {
      const img = new Image();
      img.onload = () => res({ width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = () => res(null);
      img.src = src;
    });

    loadImageDims(ogImage).then(dim => {
      if (dim) {
        useHead({
          meta: [
            { property: 'og:image:width', content: String(dim.width) },
            { property: 'og:image:height', content: String(dim.height) }
          ]
        });
      }
    });
  }

</script>


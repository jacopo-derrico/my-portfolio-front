<template>
    <div id="sidebar" class="fixed hidden secondary-font lg:flex flex-col justify-center top-0 bottom-0 left-[-0.8rem] xl:left-0 z-[100]">
        <div class="bars w-fit ps-6">
            <span class="text-accent ms-[-7px]">{{ miscStore.currentSection?.number ?? '01' }}</span>
            <div :class="{ 'active-bar': 'about-section' === activeId }" class="bar flex items-center gap-4">
                <div class="bg-white vertical-bar h-[100px] w-[4px]"></div>
                <NuxtLink to="#about-section">_about</NuxtLink>
            </div>
            <div :class="{ 'active-bar': 'experience-section' === activeId }" class="bar flex items-center gap-4 text-accent">
                <div class="bg-white vertical-bar h-[100px] w-[4px]"></div>
                <NuxtLink to="#experience-section">_experience</NuxtLink>
            </div>
            <div :class="{ 'active-bar': 'portfolio-section' === activeId }" class="bar flex items-center gap-4 text-accent">
                <div class="bg-white vertical-bar h-[100px] w-[4px]"></div>
                <NuxtLink to="#portfolio-section">_portfolio</NuxtLink>
            </div>
            <div :class="{ 'active-bar': 'contacts-section' === activeId }" class="bar flex items-center gap-4 text-accent">
                <div class="bg-white vertical-bar h-[100px] w-[4px]"></div>
                <NuxtLink to="#contacts-section">_contacts</NuxtLink>
            </div>
            <span class="text-white ms-[-12px]">/04</span>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import { useMiscStore } from '~/store/misc';

    const miscStore = useMiscStore();

    const activeId = ref('')

    const observer = ref(null)

    onMounted(() => {
        observer.value = new IntersectionObserver(
            (entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const sectionNumber = entry.target.getAttribute('data-section-number');
                if (entry.isIntersecting && id) {
                    activeId.value = id;
                    miscStore.currentSection =  {
                        sectionName: id.split('-')[0],
                        number: sectionNumber
                    };
                }
            })
            },
            {
                threshold: 0.6,
                rootMargin: '0px'
            }
        )

        document.querySelectorAll('#about-section, #experience-section, #portfolio-section, #contacts-section').forEach((section) => {
            observer.value?.observe(section);
        })
    })

    onUnmounted(() => {
        if (observer.value) {
            observer.value.disconnect();
        }
    })
</script>
<template>
    <section id="experience-section" data-section-number="02" class="flex mx-auto my-[200px] flex-wrap lg:py-0 lg:justify-between">
        <div class="flex-initial md:pe-8 lg:w-1/2">
            <h3 class="text-button mb-10">// experience</h3>
            <div>
                <div v-for="job in experienceStore.experience" :key="job.year" class="mb-10">
                    <div class="flex justify-between">
                        <div class="w-1/4">
                            <p class="text-primary secondary-font text-[20px]">{{job.year}}</p>
                        </div>
                        <div class="w-3/4">
                            <h6 class="text-primary">{{job.jobTitle}}</h6>
                            <p class="text-accent  secondary-font text-[15px]">{{job.company}}</p>
                            <p class="text-secondary">{{job.description}}</p>
                            <div class="mt-3">
                                <hr class="hr-custom">
                                <div class="hr-bump"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-initial md:ps-8 lg:w-1/2">
            <h3 class="text-button mb-10">// education</h3>
            <div v-for="course in experienceStore.education" :key="course.year" class="mb-10">
                <div class="flex justify-between">
                    <div class="w-1/4">
                        <p class="text-primary secondary-font text-[20px]">{{course.year}}</p>
                    </div>
                    <div class="w-3/4">
                        <h6 class="text-primary">{{course.title}}</h6>
                        <p class="text-accent  secondary-font text-[15px]">{{course.school}}</p>
                        <p class="text-secondary">{{course.description}}</p>
                        <div class="mt-3">
                            <hr class="hr-custom">
                            <div class="hr-bump"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center w-full mt-10">
            <a href="https://www.linkedin.com/in/jacopo-d-errico">
                <button class="text-button uppercase btn-style py-3 px-5">_see more <svg
            class="inline mb-[3px]" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px"
            fill="#01F0FF">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg></button>
            </a>
        </div>
    </section>
</template>

<script setup>
    import { useExperienceStore } from '~/store/experience';

    const experienceStore = useExperienceStore();
</script>
<template>
    <section id="experience-section" class="flex mx-auto py-10 my-[200px] flex-wrap lg:py-0 lg:w-10/12 lg:justify-between">
        <div class="flex-initial pe-8 lg:w-1/2">
            <h3 class="text-button mb-10">// experience</h3>
            <div>
                <div v-for="job in experienceStore.experience" :key="job.year" class="mb-10">
                    <div class="flex justify-between">
                        <div class="w-1/4">
                            <p class="text-primary secondary-font text-[20px]">{{job.year}}</p>
                        </div>
                        <div class="w-3/4">
                            <h6 class="text-primary">{{job.jobTitle}}</h6>
                            <p class="text-primary  secondary-font text-[15px]">{{job.company}}</p>
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
        <div class="flex-initial ps-8 lg:w-1/2">
            <h3 class="text-button mb-10">// education</h3>
            <div v-for="course in experienceStore.education" :key="course.year" class="mb-10">
                <div class="flex justify-between">
                    <div class="w-1/4">
                        <p class="text-primary secondary-font text-[20px]">{{course.year}}</p>
                    </div>
                    <div class="w-3/4">
                        <h6 class="text-primary">{{course.title}}</h6>
                        <p class="text-primary  secondary-font text-[15px]">{{course.school}}</p>
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
                <button class="text-button uppercase btn-style py-3 px-5">_see more</button>
            </a>
        </div>
    </section>
</template>

<script setup>
    import { useExperienceStore } from '~/store/experience';

    const experienceStore = useExperienceStore();
</script>
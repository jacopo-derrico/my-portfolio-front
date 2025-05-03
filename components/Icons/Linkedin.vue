<template>
    <NuxtLink :to="link">
            <svg class="social-icon" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.94 270.83" :fill="fillColor"><g data-name="Layer 2"><g><circle cx="35.33" cy="35.33" r="35.33"/><rect x="5.89" y="94.2" width="58.88" height="176.63" rx="2"/><path d="M264.94,159V259.05a11.81,11.81,0,0,1-11.77,11.78H217.84a11.8,11.8,0,0,1-11.77-11.78V176.63a29.44,29.44,0,0,0-58.88,0v82.42a11.81,11.81,0,0,1-11.78,11.78H100.09a11.81,11.81,0,0,1-11.78-11.78V106A11.81,11.81,0,0,1,100.09,94.2h35.32A11.81,11.81,0,0,1,147.19,106v7.53c11.77-15.25,31.26-25.2,53-25.2C232.68,88.31,264.94,111.86,264.94,159Z"/></g></g></svg>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '30px'
    },
    height: {
        type: String,
        default: '30px'
    },
    fillColor: {
        type: String,
        default: '#fff' // Default color if needed
    }
})
</script>

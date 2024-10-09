<template>
    <div>
        <a :href="link">
            <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.7 301.7" :fill="fillColor"><g data-name="Layer 2"><g><path d="M228.88,0H72.82A72.84,72.84,0,0,0,0,72.82V228.88A72.84,72.84,0,0,0,72.82,301.7H228.88a72.83,72.83,0,0,0,72.82-72.82V72.82A72.83,72.83,0,0,0,228.88,0Zm46.81,223.68a52,52,0,0,1-52,52H78a52,52,0,0,1-52-52V78A52,52,0,0,1,78,26H223.68a52,52,0,0,1,52,52Z"/><path d="M150.85,72.82a78,78,0,1,0,78,78A78.06,78.06,0,0,0,150.85,72.82Zm0,130.05a52,52,0,1,1,52-52A52.11,52.11,0,0,1,150.85,202.87Z"/><circle cx="234.08" cy="67.62" r="15.61"/></g></g></svg>
        </a>
    </div>
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

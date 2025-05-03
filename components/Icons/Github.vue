<template>
    <NuxtLink :to="link">
            <svg 
                :width="width" 
                :height="height" 
                enable-background="new 0 0 30 30" 
                id="Github" 
                version="1.1" 
                viewBox="0 0 30 30" 
                xml:space="preserve" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <path 
                    class="social-icon"
                    clip-rule="evenodd" 
                    d="M19,30h-3.996h-4c0,0,0.011-2.372,0-4  c-5.473,1.178-7-3-7-3c-1-2-2-3-2-3c-2-1.188,0-1,0-1c2,0,3,2,3,2c1.755,2.981,4.878,2.501,6,2c0-1,0.438-2.512,1-3  C7.636,19.508,4,17,4,12s1.004-6,2.004-7C5.802,4.507,4.965,2.685,6.035,0C6.035,0,8,0,10,3c0.991-0.991,4-1,5.001-1  C16,2,19.009,2.009,20,3c2-3,3.969-3,3.969-3c1.07,2.685,0.233,4.507,0.031,5c1,1,2,2,2,7s-3.632,7.508-8,8c0.562,0.488,1,2.21,1,3  V30z" 
                    :fill="fillColor" 
                    fill-rule="evenodd"
                />
            </svg>
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

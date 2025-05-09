import { defineStore } from 'pinia';
import axios from 'axios';

export const usePortfolioStore = defineStore('portfolioStore', () => {
    // state 
    let backUrl = '' // gets
    let singleProject = null
    let singleProjectData = null
    let isLoading = false
    let error = ''

    let projects = [
        {
            id: 1,
            slug: 'seo-preview',
            title: 'SEO preview',
            date: '2024',
            company: 'Personal project',
            collaborators: [{
                name: 'Moni',
                url: 'https://github.com/monica-harabagiu'
            }],
            description: "This tool has been created to give a preview of your website in Google's search engine. You can type in the title and the description and you will see the appearence on the side, with a bar that helps you understand if you are writing too much. In addition there are informations and links to dive deeper into SEO, if needed.",
            categories: ['Frontend', 'UX', 'UI'],
            technologies: ['Nuxt.js', 'Tailwind', 'GSAP', 'Figma'],
            cover: '/proj/covers/seo-preview.webp',
            images: ['/proj/seo-preview-1.webp', '/proj/seo-preview-2.webp', '/proj/seo-preview-3.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/SEO-preview',
            demoUrl: 'https://seo-preview.netlify.app/'
        },
        {
            id: 2,
            slug: 'startup-car-repair',
            title: 'Startup car repair website',
            date: '2024',
            company: 'Leox Solution',
            collaborators: [{
                name: 'Moni',
                url: 'https://github.com/monica-harabagiu'
            }],
            description: "A website for a startup that works in the car repair field and connects repair shops and clients and help them pay the repair job through bank loans. It is simple in structure as it uses only HTML, CSS & JavaScript. The contact form uses Email.js to send emails.",
            categories: ['Frontend', 'UX', 'UI'],
            technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
            cover: '/proj/covers/leox.webp',
            images: ['/proj/leox-1.webp', '/proj/leox-2.webp', '/proj/leox-3.webp', '/proj/leox-4.webp', '/proj/leox-5.webp', '/proj/leox-6.webp', '/proj/leox-7.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/leox-solution-website',
            demoUrl: 'https://www.leoxsolution.com/'
        },
        {
            id: 3,
            slug: 'startup-rental',
            title: 'Startup rental website & logo',
            date: '2024',
            company: 'Omni Rent',
            collaborators: [],
            description: "A company website for a startup that works in the rental field afor all kind of personal vehicles. It has been designed on Figma and developed in Nuxt.js and has optimized SEO. The animations are made with GSAP library and some components are created with the element UI module. The logo resembles the recycle logo, to hint to the ecology of renting.",
            categories: ['Frontend', 'UX', 'UI'],
            technologies: ['Nuxt.js', 'GSAP', 'Tailwind', 'Figma', 'Illustrator'],
            cover: '/proj/covers/',
            images: ['/proj/omni-1.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/rent-website',
            demoUrl: 'https://omnirent.io/'
        },
        {
            id: 4,
            slug: 'e-commerce-ssr',
            title: 'E-Commerce SSR',
            date: '2024',
            company: 'Personal project',
            collaborators: [],
            description: "This is a test to create an e-commerce SEO-friendly, it buillds the sitemap based on an api call and has robot rules. It uses sitemap and robots modules for Nuxt",
            categories: ['Frontend'],
            technologies: ['Nuxt.js', 'Tailwind'],
            cover: '/proj/covers/ecommerce.webp',
            images: ['/proj/ecommerce-1.webp', '/proj/ecommerce-2.webp', '/proj/ecommerce-3.webp', '/proj/ecommerce-4.webp', '/proj/ecommerce-5.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/ecommerce-nuxt',
            demoUrl: 'https://e-commerce-ssr.netlify.app/'
        },
        {
            id: 5,
            slug: 'startup-consultancy-agency',
            title: 'Startup consultancy website & logo',
            date: '2024',
            company: 'Quality Effective Solutions',
            collaborators: [{
                name: 'Moni',
                url: 'https://github.com/monica-harabagiu'
            }],
            description: "Consultancy website that works with startups to help them grow. The website is made on Wordpress with Elementor as a builder and some tweaks with CSS and JavaScript. The logo has the mascotte of the unicorn that can be used as an icon, colorful it has a gradient, but can easily be used in black or white.",
            categories: ['Frontend', 'Backend', 'Logo'],
            technologies: ['Wordpress', 'Elementor', 'Figma', 'Illustrator'],
            cover: '/proj/covers/qes.webp',
            images: ['/proj/qes-1.webp', '/proj/qes-2.webp', '/proj/qes-3.webp', '/proj/qes-4.webp', '/proj/qes-5.webp'],
            githubUrl: '',
            demoUrl: 'https://qesolutions.io/'
        },
        {
            id: 6,
            slug: 'photographer-website',
            title: 'Photographer website',
            date: '2023',
            company: 'Andrea Lovera',
            collaborators: [{
                name: 'Moni',
                url: 'https://github.com/monica-harabagiu'
            }],
            description: "A personal website for a photographer that helps him showcase his photos and virtual tour projects. It has different pages that shows specific kind of photos that has been optimized to not take too long on charging the content. The virtual tours are embedded from Kuula. Buttons have a special hover effect that resembles the camera settings.",
            categories: ['Frontend', 'Backend'],
            technologies: ['Wordpress', 'Spectra', 'Figma'],
            cover: '/proj/covers/lovera.webp',
            images: ['/proj/lovera-1.webp', '/proj/lovera-2.webp', '/proj/lovera-3.webp', '/proj/lovera-4.webp', '/proj/lovera-5.webp', '/proj/lovera-6.webp', '/proj/lovera-7.webp'],
            githubUrl: '',
            demoUrl: 'https://www.andrealovera.com/'
        },
        {
            id: 7,
            slug: 'nutritionist-website',
            title: 'Nutritionist website',
            date: '2023',
            company: 'Lara Di Gennaro',
            collaborators: [],
            description: "A personal website for a nustritionist, it helps her explain what she does, what type of services she can give and talks a bit about herself and her education on the matter. It is clean and easy to navigate, a few animations help making it more dynamic.",
            categories: ['Frontend', 'Backend'],
            technologies: ['Wordpress', 'Elementor'],
            cover: '/proj/covers/digennaro.webp',
            images: ['/proj/digennaro-1.webp', '/proj/digennaro-2.webp', '/proj/digennaro-3.webp', '/proj/digennaro-4.webp'],
            githubUrl: '',
            demoUrl: ''
        },
        {
            id: 8,
            slug: 'cromeyeui-bar',
            title: 'Cromeyeui bar website',
            date: '2025',
            company: 'Bar delle guide - Courmayeur',
            collaborators: [{
                name: 'Valérie',
                url: 'https://valeriejaccod.myportfolio.com/'
            }],
            description: "The website for a storic café in the beautiful city of Courmayeur, between Italy and France. The design has been made by a professional designer, that opened the way for a few challenges of customisation, especially for the elements composition that is out of the ordinary. The funniest parts where animations, especially the one in the hero of the home, fully customised and responsive.",
            categories: ['Frontend', 'Backend'],
            technologies: ['Wordpress'],
            cover: '/proj/covers/cromeyeui.webp',
            images: ['/proj/cromeyeui-1.webp', '/proj/cromeyeui-2.webp', '/proj/cromeyeui-3.webp', '/proj/cromeyeui-4.webp','/proj/cromeyeui-5.webp','/proj/cromeyeui-6.webp','/proj/cromeyeui-7.webp','/proj/cromeyeui-8.webp'],
            githubUrl: '',
            demoUrl: 'https://www.cromeyeuicafe.it/'
        },
    ]

    return {
        projects,
        backUrl,
        singleProject,
        singleProjectData,
        isLoading,
        error
    }
});
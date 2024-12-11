import { Title } from '#build/components';
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePortfolioStore = defineStore('portfolioStore', () => {
    // state 
    // let projects = ref([]) // stores all projects data from api
    let backUrl = '' // gets
    let singleProject = null
    let singleProjectData = null
    let isLoading = false
    let error = ''

    let projects = [
        {
            id: 1,
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
            images: ['assets/proj/seo-preview-1.webp', 'assets/proj/seo-preview-2.webp', 'assets/proj/seo-preview-3.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/SEO-preview',
            demoUrl: 'https://seo-preview.netlify.app/'
        },
        {
            id: 2,
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
            images: ['~/assets/proj/leox-1.webp', '~/assets/proj/leox-2.webp', '~/assets/proj/leox-3.webp', '~/assets/proj/leox-4.webp', '~/assets/proj/leox-5.webp', '~/assets/proj/leox-6.webp', '~/assets/proj/leox-7.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/leox-solution-website',
            demoUrl: 'https://www.leoxsolution.com/'
        },
        {
            id: 3,
            title: 'Startup rental website',
            date: '2024',
            company: 'Omni Rent',
            collaborators: [],
            description: "A company website for a startup that works in the rental field afor all kind of personal vehicles. It has been designed on Figma and developed in Nuxt.js and has optimized SEO. The animations are made with GSAP library and some components are created with the element UI module.",
            categories: ['Frontend', 'UX', 'UI'],
            technologies: ['Nuxt.js', 'GSAP', 'Tailwind', 'Figma'],
            images: ['~/assets/proj/omni-1.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/rent-website',
            demoUrl: ''
        },
        {
            id: 4,
            title: 'E-Commerce SSR',
            date: '2024',
            company: 'Personal project',
            collaborators: [],
            description: "This is a test to create an e-commerce SEO-friendly, it buillds the sitemap based on an api call and has robot rules. It uses sitemap and robots modules for Nuxt",
            categories: ['Frontend'],
            technologies: ['Nuxt.js', 'Tailwind'],
            images: ['~/assets/proj/ecommerce-1.webp', '~/assets/proj/ecommerce-2.webp', '~/assets/proj/ecommerce-3.webp', '~/assets/proj/ecommerce-4.webp', '~/assets/proj/ecommerce-5.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/ecommerce-nuxt',
            demoUrl: 'https://e-commerce-ssr.netlify.app/'
        },
    ]


    // actions
    // async fetchProjects() {
    //     this.isLoading = true;
    //     this.error = '';
    //     try {
    //         const response = await axios.get('http://127.0.0.1:8000/api/projects');
    //         this.projects = response.data.projects;
    //         this.backUrl = response.data.baseUrl;
    //     } catch (error) {
    //         this.error = 'Failed to fetch projects';
    //         console.error('Error fetching projects:', error);
    //     } finally {
    //         this.isLoading = false;
    //     }
    // },
    // async fetchSingleProject() {
    //     this.isLoading = true;
    //     this.error = '';
    //     try {
    //         const response = await axios.get(`http://127.0.0.1:8000/api/projects/${this.singleProject}`);
    //         this.singleProjectData = response.data.project;
    //     } catch (error) {
    //         this.error = 'Failed to fetch project data'
    //         console.error('Error fetching project data:', error);
    //     } finally {
    //         this.isLoading = false
    //     }
    // },
    // initializeProjects() {
    //     // Fetch projects on component mount
    //     this.fetchProjects()
    // },
    // setSingleProject(id: null) {
    //     this.singleProject = id
    // }
    // },

    return {
        projects,
        backUrl,
        singleProject,
        singleProjectData,
        isLoading,
        error
    }
});
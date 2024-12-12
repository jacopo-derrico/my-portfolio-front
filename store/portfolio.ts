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
            cover: '/public/proj/covers/seo-preview.webp',
            images: ['/public/proj/seo-preview-1.webp', '/public/proj/seo-preview-2.webp', '/public/proj/seo-preview-3.webp'],
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
            cover: '/public/proj/covers/leox.webp',
            images: ['/public/proj/leox-1.webp', '/public/proj/leox-2.webp', '/public/proj/leox-3.webp', '/public/proj/leox-4.webp', '/public/proj/leox-5.webp', '/public/proj/leox-6.webp', '/public/proj/leox-7.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/leox-solution-website',
            demoUrl: 'https://www.leoxsolution.com/'
        },
        {
            id: 3,
            title: 'Startup rental website & logo',
            date: '2024',
            company: 'Omni Rent',
            collaborators: [],
            description: "A company website for a startup that works in the rental field afor all kind of personal vehicles. It has been designed on Figma and developed in Nuxt.js and has optimized SEO. The animations are made with GSAP library and some components are created with the element UI module. The logo resembles the recycle logo, to hint to the ecology of renting.",
            categories: ['Frontend', 'UX', 'UI'],
            technologies: ['Nuxt.js', 'GSAP', 'Tailwind', 'Figma', 'Illustrator'],
            cover: '/public/proj/covers/',
            images: ['/public/proj/omni-1.webp'],
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
            cover: '/public/proj/covers/ecommerce.webp',
            images: ['/public/proj/ecommerce-1.webp', '/public/proj/ecommerce-2.webp', '/public/proj/ecommerce-3.webp', '/public/proj/ecommerce-4.webp', '/public/proj/ecommerce-5.webp'],
            githubUrl: 'https://github.com/jacopo-derrico/ecommerce-nuxt',
            demoUrl: 'https://e-commerce-ssr.netlify.app/'
        },
        {
            id: 5,
            title: 'Consultancy website & logo',
            date: '2024',
            company: 'Quality Effective Solutions',
            collaborators: [{
                name: 'Moni',
                url: 'https://github.com/monica-harabagiu'
            }],
            description: "Consultancy website that works with startups to help them grow. The website is made on Wordpress with Elementor as a builder and some tweaks with CSS and JavaScript. The logo has the mascotte of the unicorn that can be used as an icon, colorful it has a gradient, but can easily be used in black or white.",
            categories: ['Frontend', 'Backend', 'Logo'],
            technologies: ['Wordpress', 'Elementor', 'Figma', 'Illustrator'],
            cover: '/public/proj/covers/qes.webp',
            images: ['/public/proj/qes-1.webp', '/public/proj/qes-2.webp', '/public/proj/qes-3.webp', '/public/proj/qes-4.webp', '/public/proj/qes-5.webp'],
            githubUrl: '',
            demoUrl: 'https://qesolutions.io/'
        },
        {
            id: 6,
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
            cover: '/public/proj/covers/lovera.webp',
            images: ['/public/proj/lovera-1.webp', '/public/proj/lovera-2.webp', '/public/proj/lovera-3.webp', '/public/proj/lovera-4.webp', '/public/proj/lovera-5.webp', '/public/proj/lovera-6.webp', '/public/proj/lovera-7.webp'],
            githubUrl: '',
            demoUrl: 'https://www.andrealovera.com/'
        },
        {
            id: 7,
            title: 'Nutritionist website',
            date: '2023',
            company: 'Lara Di Gennaro',
            collaborators: [],
            description: "A personal website for a nustritionist, it helps her explain what she does, what type of services she can give and talks a bit about herself and her education on the matter. It is clean and easy to navigate, a few animations help making it more dynamic.",
            categories: ['Frontend', 'Backend'],
            technologies: ['Wordpress', 'Elementor'],
            cover: '/public/proj/covers/digennaro.webp',
            images: ['/public/proj/digennaro-1.webp', '/public/proj/digennaro-2.webp', '/public/proj/digennaro-3.webp', '/public/proj/digennaro-4.webp'],
            githubUrl: '',
            demoUrl: 'https://www.digennaronutrizionista.it/'
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
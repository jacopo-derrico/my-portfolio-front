import { Title } from '#build/components';
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePortfolioStore = defineStore('portfolioStore', {
    state: () => ({
        projects: [],
        backUrl: '',
        singleProject: null,
        singleProjectData: []
    }),
    getters: {},
    actions: {
        async fetchProjects() {
            try {
                this.singleProject = null;
                const response = await axios.get('http://127.0.0.1:8000/api/projects');
                this.projects = response.data.projects;
                this.backUrl = response.data.baseUrl;
            } catch (error) {
                console.error('Error fetching projects:', error);
                throw error;
            }
        },
        async fetchSingleProject() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/projects/${this.singleProject}`);
                this.singleProjectData = response.data.project;
                console.log(this.singleProjectData);
                
            } catch (error) {
                console.error('Error fetching project data:', error);
                throw error;
            }
        }
    },
});
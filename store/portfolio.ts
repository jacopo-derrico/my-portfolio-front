import { Title } from '#build/components';
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePortfolioStore = defineStore('portfolioStore', {
    state: () => ({
        projects: [],
        backUrl: ''
    }),
    getters: {},
    actions: {
        async fetchProjects() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/projects');
                this.projects = response.data.projects;
                this.backUrl = response.data.baseUrl;
                console.log(this.backUrl);
            } catch (error) {
                console.error('Error fetching projects:', error);
                throw error;
            }
        }
    },
});
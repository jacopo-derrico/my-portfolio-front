import { Title } from '#build/components';
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePortfolioStore = defineStore('portfolioStore', {
    state: () => ({
        projects: [], // stores all projects data from api
        backUrl: '', // gets
        singleProject: null,
        singleProjectData: null,
        isLoading: false,
        error: ''
    }),
    getters: {},
    actions: {
        async fetchProjects() {
            this.isLoading = true;
            this.error = '';
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/projects');
                this.projects = response.data.projects;
                this.backUrl = response.data.baseUrl;
            } catch (error) {
                this.error = 'Failed to fetch projects';
                console.error('Error fetching projects:', error);
            } finally {
                this.isLoading = false;
            }
        },
        async fetchSingleProject() {
            this.isLoading = true;
            this.error = '';
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/projects/${this.singleProject}`);
                this.singleProjectData = response.data.project;
            } catch (error) {
                this.error = 'Failed to fetch project data'
                console.error('Error fetching project data:', error);
            } finally {
                this.isLoading = false
            }
        },
        initializeProjects() {
            // Fetch projects on component mount
            this.fetchProjects()
        },
        setSingleProject(id: null) {
            this.singleProject = id
        }
    },
});
import { defineStore } from 'pinia';

export const useMiscStore = defineStore('miscStore', () => {
    let myEmail = 'derricoj.design@gmail.com';
    let gitHub = 'https://github.com/jacopo-derrico';
    let insta = 'https://www.instagram.com/deja_unleashed/profilecard/?igsh=YnB1ZWNrZGtsdWQ=';
    let linkedin = 'https://www.linkedin.com/in/jacopo-d-errico';
    
    let currentSection = '';

    return {myEmail, gitHub, insta, linkedin}
});
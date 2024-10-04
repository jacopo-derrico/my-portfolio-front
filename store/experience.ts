import { Title } from '#build/components';
import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experienceStore', () => {
    let experience = [
        {
          "year": "2020-present",
          "jobTitle": "Web Developer & Designer",
          "company": "Freelance",
          "description": 
            "Creation of a WordPress site for a startup growth and blockchain company with a contact form and downloadable materials.Creation of a WordPress site for a photographer with a portfolio and contact options.Creation of a website in HTML and CSS with a contact form in AWS for a startup in the field of repairs and blockchain."
        },
        {
          "year": "2023-2024",
          "jobTitle": "Jr Full Stack Web Developer Trainee",
          "company": "Boolean",
          "description": 
            "Design and development of a food delivery website using Inertia.js to combine Laravel for the backend and Vue for the frontend. It allows the restaurant to add dishes to their menu and make them visible to the customer, who can add them to the cart and make a payment. Development of a video game store website built on Node.js using Vue and Vite. It features carousels, animations, and custom components. Styled with Bootstrap, but modified using SCSS to adapt it to the client. Project for a website on Node.js with Vite and Vue to display information about movies and TV series. Information is retrieved via API using axios, with trailer views and search by name. Styled with Bootstrap and SCSS. Development of a mock messaging website with JavaScript where users can send messages, delete them, and receive automated responses, with multiple chats."
        },
        {
          "year": "2021-2024",
          "jobTitle": "Lead designer",
          "company": "PickEat srl - Startup",
          "description": 
            "UX/UI design on Figma for a management app and its counterpart for ordering food at events. Creation of graphic content for social media and print using Adobe programs. Creation of corporate brand identity."
        }
    ];
    let education = [
        {
          "year": "2023-2024",
          "title": "Master Full Stack Developer",
          "school": "Boolean",
          "description": 
            "An intensive 700-hour course divided into theoretical lessons and practical exercises to learn the basics of front-end and back-end development for the web. Here, I learned the most commonly used languages and frameworks in the field."
        },
        {
          "year": "2020",
          "title": "UX/UI design",
          "school": "Udemy",
          "description": 
            "Online course to learn the basics of UX and UI design for the web and mobile applications."
        },
        {
          "year": "2015-2020",
          "title": "Bachelor degree in Design and Visual Communication",
          "school": "Turin Polytechnic",
          "description": 
            "Design principles, design system, teamwork, technical knowledge of industrial production, and graphic design."
        }
    ]

    return {experience, education}
});
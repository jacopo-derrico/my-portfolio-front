import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experienceStore', () => {
  let experience = [
    {
      "year": "2025-present",
      "jobTitle": "Web Developer",
      "company": "Unit-Growth",
      "description":
        "'Senior' WordPress web developer, in charge of different websites, affiliate marketing, SEO optimised, geotargeting"
    },
    {
      "year": "2020-present",
      "jobTitle": "Web Developer & Designer",
      "company": "Freelance",
      "description":
        "Creation, and sometimes design, of websites both with WordPress and by code, usually Nuxt.js. SEO optimisation, Google Analytics and cookie manager. Design of brand identities, logos, pitch decks, social media material, book covers. Different clients: musicians, food & beverage, startups, agencies."
    },
    {
      "year": "2021-2024",
      "jobTitle": "Lead designer",
      "company": "PickEat srl - Startup",
      "description":
        "Mainly designing 2 different apps in Food & Beverage field, customer app and management app for restaurants. Brand identity creation, graphics for flyers and other printables, social media posts and social media manager. For free, you know, startups!"
    }
  ];
  let education = [
    {
      "year": "2025-on going",
      "title": "CS50's Introduction to Computer Science",
      "school": "HarvardX",
      "description":
        "An introduction to computer science, the famous CS50X from Harvard teached by David J. Malan, starts from comprehend how a computer 'thinks' and explain algorithms, arrays and languages from C to Python. Self-paced."
    },
    {
      "year": "2023-2024",
      "title": "Master Full Stack Developer",
      "school": "Boolean",
      "description":
        "An intensive 700-hour course divided into theoretical lessons and practical exercises to learn the basics of front-end and back-end development for the web. Here, I learned the most commonly used languages and frameworks in the field: HTML, CSS, JS, Vue.js, MySQL, PHP Laravel. Did that make me a full stack developer? ABSOLUTELY NOT, but I am working on it!"
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

  return { experience, education }
});
import {
    todo,
    techg,
    pass,
    dmarketing,
    reactani,
    dev,
    des,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    discordsvg,
    gitsvg,
    instasvg,
    linkedinsvg,
    whatsappsvg,
    xsvg,
    brainwave,
    zentry,

    python,
    prisma,
    framermotion,
    gsap,
    nvim,

    trello,
    aichatbot,
    booksy,
    notes,
    agencyLanding,
    computer,
    vscode,
    postgresql


} from "../assets/index.js";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "tech",
        title: "Tech"
    }
];

const services = [
    {
        title: "Web Developer",
        icon: dev,
    },
    {
        title: "Web Designer",
        icon: des,
    },
    {
        title: "React",
        icon: reactani,
    },
];

const experiences = [
    {
        title: "Video Editor",
        company_name: "DMarketingGuru",
        icon: dmarketing,
        iconBg: "#383E56",
        date: "February 2022 - April 2022",
        points: [
            "Developing scripts that are engaging and well-structured, according to the goals of the project.",
            "Providing high-quality video to a professional studio environment.",
            "Editing and refining video in Adobe Premiere Pro such as color correction is enabled.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "Happy to take your feedback positively.",
        name: "",
        designation: "",
        company: "",
        image: "",
    }
];

const projects = [

    {
        name: "Agency Landing Page",
        description:
            "A real-world, responsive landing page for a company/agency built with React, TailwindCSS, GSAP, and Framer Motion. It includes dynamic animations, modular components, blog support, and a contact form powered by EmailJS.",
        tags: [
            { name: "react", color: "green-text-gradient" },
            { name: "tailwindcss", color: "blue-text-gradient" },
            { name: "gsap", color: "purple-text-gradient" },
            { name: "framer motion", color: "pink-text-gradient" },
            { name: "emailjs", color: "orange-text-gradient" },
        ],
        image: agencyLanding,
        source_code_link: "",
        live_link: "https://nextzendev.com/",
    },
    {
        name: "Booksy",
        description:
            "A RESTful backend built with Node.js, Express, PostgreSQL, and Prisma ORM. It provides CRUD functionality for managing books, featuring modular architecture and Vercel deployment support.",
        tags: [
            { name: "node.js", color: "green-text-gradient" },
            { name: "express", color: "pink-text-gradient" },
            { name: "prisma", color: "blue-text-gradient" },
            { name: "postgresql", color: "orange-text-gradient" },
        ],
        image: booksy,
        source_code_link: "https://github.com/SatyamStellar/Booksy",
        live_link: "https://booksy.satyamstellar.space/",
    },

    {
        name: "Trello Clone",
        description:
            "A web-based Trello clone built with React, TailwindCSS, and React Beautiful DnD for a draggable task board experience. It features context-based state management, a responsive design, and an intuitive user interface.",
        tags: [
            { name: "react", color: "green-text-gradient" },
            { name: "tailwindcss", color: "blue-text-gradient" },
            { name: "react-beautiful-dnd", color: "purple-text-gradient" },
            { name: "context API", color: "orange-text-gradient" },
        ],
        image: trello,
        source_code_link: "https://github.com/SatyamStellar/Trello-Clone",
        live_link: "https://trello.satyamstellar.space/",
    },
    {
        name: "AI Chatbot",
        description: "A simple AI-powered chatbot built with Node.js and Express, leveraging the Google Generative AI SDK to provide intelligent conversations.",
        tags: [
            { name: "node.js", color: "green-text-gradient" },
            { name: "express", color: "blue-text-gradient" },
            { name: "google genai", color: "pink-text-gradient" },
        ],
        image: aichatbot,
        source_code_link: "https://github.com/SatyamStellar/AI-Chat-Bot",
        live_link: "",
    },
    {
        name: "Notes/API in Python ",
        description: "A secure RESTful notes management backend built with Django and JWT, ready to be paired with any frontend like React.",
        tags: [
            { name: "django", color: "blue-text-gradient" },
            { name: "rest-api", color: "green-text-gradient" },
            { name: "jwt-auth", color: "pink-text-gradient" },
        ],
        image: notes,
        source_code_link: "https://github.com/SatyamStellar/Django-App",
        live_link: "https://note.satyamstellar.space/",
    },

    {
        name: "Zentry Clone",
        description: "A visually rich and responsive spa & wellness landing page clone built with React, Tailwind CSS, and Vite. Features smooth animations with GSAP, reusable components, custom fonts, and embedded video support. Ideal for showcasing luxury experiences in a modern design.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "gsap", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" }
        ],
        image: zentry,
        source_code_link: "https://github.com/SatyamStellar/Zentry-Clone",
        live_link: "https://zentry-clone-1.netlify.app/",
    },
    {
        name: "Minimal Tailwind Web App",
        description:
            "A lightweight web application styled with TailwindCSS. This project focuses on simplicity and clean design using vanilla JavaScript for dynamic rendering and a custom state management store.",
        tags: [
            { name: "javascript", color: "green-text-gradient" },
            { name: "tailwindcss", color: "blue-text-gradient" },
            { name: "vanilla js", color: "purple-text-gradient" }
        ],
        image: todo,
        source_code_link: "https://github.com/SatyamStellar/My-To-do",
        live_link: "https://my-todo-stellar.netlify.app/",
    },

    {
        name: "BrainWave Landing Page",
        description:
            "A modern, fully responsive company landing page built using React, TailwindCSS, GSAP, and Framer Motion. The design mimics a real-world SaaS agency website with smooth animations, modular components, and an engaging user interface.",
        tags: [
            { name: "react", color: "green-text-gradient" },
            { name: "tailwindcss", color: "blue-text-gradient" },
            { name: "gsap", color: "purple-text-gradient" },
            { name: "framer motion", color: "pink-text-gradient" },
            { name: "vite", color: "orange-text-gradient" }
        ],
        image: brainwave,
        source_code_link: "https://github.com/SatyamStellar/BrainWave",
        live_link: "https://stellar-brainwave.netlify.app/",
    },
    {
        name: "Tech.Gear",
        description: "My first proper frontend project which is also be designed my me in figma",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "tailwind", color: "green-text-gradient" },
            { name: "scrollreveal", color: "pink-text-gradient" },
        ],
        image: techg,
        source_code_link: "https://github.com/SatyamStellar/Tech.Gear",
        live_link: "https://tech-gear11.netlify.app/",
    },
    {
        name: "Random Password Gen",
        description: "This is a random password generator for generating random password as you want ",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "tailwind", color: "green-text-gradient" },
            { name: "css", color: "pink-text-gradient" },
        ],
        image: pass,
        source_code_link: "https://github.com/SatyamStellar/Random-Password-Gen",
        live_link: "https://randompasswordgen11.netlify.app/",
    }
];

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                id: 1,
                name: "HTML 5",
                image: html
            },
            {
                id: 2,
                name: "JavaScript",
                image: javascript
            },
            {
                id: 3,
                name: "React JS",
                image: reactjs,
            },
            {
                id: 4,
                name: "Tailwind CSS",
                image: tailwind
            },
            {
                id: 8,
                name: "Three JS",
                image: threejs
            },
            {
                id: 9,
                name: "Framer-Motion",
                image: framermotion
            },
            {
                id: 10,
                name: "GSAP",
                image: gsap
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                id: 5,
                name: "Node JS",
                image: nodejs
            },
            {
                id: 6,
                name: "MongoDB",
                image: mongodb
            },
            {
                id: 6,
                name: "PostgreSQL",
                image: postgresql
            },
            {
                id: 7,
                name: "Prisma",
                image: prisma
            },
        ],
    },
    {
        title: "Others",
        skills: [
            {
                id: 11,
                name: "Figma",
                image: figma
            },
            {
                id: 12,
                name: "Git",
                image: git
            },
            {
                id: 13,
                name: "VSCode",
                image: vscode
            },
            {
                id: 14,
                name: "Neovim",
                image: nvim
            },
            {
                id: 15,
                name: "Networking",
                image: computer
            },
        ],
    },
];


const footerlinks = [
    {
        id: 0,
        icon: instasvg,
        link: "https://www.instagram.com/_.stellar_._/"
    },
    {
        id: 1,
        icon: discordsvg,
        link: "https://discord.com/users/1062730253992206386"
    },
    {
        id: 2,
        icon: gitsvg,
        link: "https://github.com/satyamStellar"
    },
    {
        id: 3,
        icon: linkedinsvg,
        link: "https://www.linkedin.com/in/satyam-stellar-38bba8331/"
    },
    {
        id: 4,
        icon: xsvg,
        link: "https://x.com/satyam_stellarhttps://x.com/satyam_stellar"
    },
]
export { services, experiences, testimonials, projects, footerlinks };


import {
    todo,
    techg,
    brut,
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
} from "../assets";

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
    //{
    //    title: "NeoVim User",
    //    icon: creator,
    //},
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
        name: "Todo WebApp",
        description: "A web-based platform that allows users to create and manage their todos.",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "localstorage", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: todo,
        source_code_link: "https://github.com/SatyamStellar/My-To-do",
        live_link: "https://my-todo-stellar.netlify.app/",
    },
    {
        name: "Zentry Clone",
        description: "This is a frontend clone of Zentry, I use my frontend skills to make this clone",
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
        name: "BrainWave",
        description: "This is a frontend project build in react using tailwind css ",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "scroll-lock", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" }
        ],
        image: brainwave,
        source_code_link: "https://github.com/SatyamStellar/BrainWave",
        live_link: "https://zentry-clone-1.netlify.app/",
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
    },
    {
        name: "BrutForce",
        description: "This is a basic javascript brute force web-app",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "tailwind", color: "green-text-gradient" },
            { name: "css", color: "pink-text-gradient" },
        ],
        image: brut,
        source_code_link: "https://github.com/SatyamStellar/Brute-Force",
        live_link: "https://bruteforcev2.netlify.app/",
    },
];

const technologies = [
    {
        id: 0,
        name: "HTML 5",
        icon: html,
    },
    {
        id: 1,
        name: "CSS 3",
        icon: css,
    },
    {
        id: 2,
        name: "JavaScript",
        icon: javascript,
    },
    //{
    //id:3,
    //    name: "TypeScript",
    //    icon: typescript,
    //},
    {
        id: 4,
        name: "React JS",
        icon: reactjs,
    },
    //{
    //    id:5,
    //    name: "Redux Toolkit",
    //    icon: redux,
    //},
    {
        id: 6,
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        id: 7,
        name: "Node JS",
        icon: nodejs,
    },
    {
        id: 8,
        name: "MongoDB",
        icon: mongodb,
    },
    {
        id: 9,
        name: "Three JS",
        icon: threejs,
    },
    {
        id: 10,
        name: "git",
        icon: git,
    },
    {
        id: 11,
        name: "figma",
        icon: figma,
    },
    //{
    //    id:12,
    //    name: "docker",
    //    icon: docker,
    //},
];
const footerlinks = [
    {
        id: 0,
        icon: instasvg,
        link: "https://www.instagram.com/y.eah_._._/"
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
    {
        id: 5,
        icon: whatsappsvg,
        link: "https://wa.me/+918077571779"
    },
]
export { services, experiences, testimonials, projects, technologies, footerlinks };


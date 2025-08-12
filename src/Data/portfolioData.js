// src/data.js
// This file contains all the static data for the portfolio website.
// Separating data into its own file makes the main components cleaner and easier to read.

// Font Awesome icons are used for qualifications, skills, and navigation.
// Make sure you have Font Awesome included in your project for these to work.

/**
 * @typedef {Object} Qualification
 * @property {string} degree - The name of the degree or certification.
 * @property {string} year - The year or timeframe of the qualification.
 * @property {string} institution - The institution where the qualification was obtained.
 * @property {string} icon - The Font Awesome icon class (e.g., 'fa-cloud').
 */
export const qualifications = [
    { degree: "MCA (Cloud Computing)", year: "Ongoing", institution: "MUJ Online, Jaipur", icon: "fa-solid fa-cloud" },
    { degree: "BSc ETC", year: "2021-2024", institution: "Khallikote Unitary University, Berhampur", icon: "fa-solid fa-microchip" },
    { degree: "+2 Science (CHSE)", year: "2019-2021", institution: "Khallikote H.S. School, Berhampur", icon: "fa-solid fa-flask" },
    { degree: "10th (CBSE)", year: "2019", institution: "Gandhi Public School, Gunupur", icon: "fa-solid fa-book" },
];

/**
 * @typedef {Object} Skill
 * @property {string} name - The name of the skill.
 * @property {string} icon - The Font Awesome icon class (e.g., 'fa-brands fa-react').
 * @property {string} color - The Tailwind CSS color class for the icon.
 */
export const skills = [
    { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-green-400" },
    { name: "Express.js", icon: "fa-solid fa-server", color: "text-gray-400" },
    { name: "JavaScript", icon: "fa-brands fa-js-square", color: "text-yellow-400" },
    { name: "MongoDB", icon: "fa-solid fa-database", color: "text-green-500" },
    { name: "Mongoose", icon: "fa-solid fa-leaf", color: "text-green-600" },
    { name: "Python", icon: "fa-brands fa-python", color: "text-blue-500" },
    { name: "C Programming", icon: "fa-solid fa-code", color: "text-blue-600" },
    { name: "SQL", icon: "fa-solid fa-database", color: "text-orange-400" },
    { name: "AWS", icon: "fa-brands fa-aws", color: "text-orange-500" },
    { name: "Linux", icon: "fa-brands fa-linux", color: "text-yellow-500" },
    { name: "Git & GitHub", icon: "fa-brands fa-github", color: "text-gray-300" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-400" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-blue-400" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wand-magic-sparkles", color: "text-cyan-400" },
    { name: "PayPal API", icon: "fa-brands fa-paypal", color: "text-blue-600" },
];

/**
 * @typedef {Object} Project
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string[]} tech - An array of technologies used.
 * @property {string} live - The URL to the live deployment.
 * @property {string} code - The URL to the source code repository.
 * @property {boolean} [featured] - Optional flag for featured projects.
 * @property {string} gradient - Tailwind CSS gradient classes for the card background.
 */
export const projects = [
    {
        title: "Automated Incremental Backups",
        description: "A Bash script to automate 24-hour incremental backups using tar and cron jobs. Features argument validation, dynamic filename generation, and robust scheduling.",
        tech: ["Bash", "Cron", "Linux", "tar"],
        live: "#",
        code: "#",
        featured: true,
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "E-commerce App",
        description: "A modern, full-stack e-commerce application featuring a clean UI built with shadcn/ui and Tailwind CSS, powered by the MERN stack.",
        tech: ["MERN Stack", "shadcn/ui", "Tailwind CSS"],
        live: "#",
        code: "#",
        featured: true,
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Automated Weather ETL Pipeline",
        description: "An end-to-end ETL process using Bash to extract daily weather data from wttr.in API, transform it into a TSV format, and automate execution with cron.",
        tech: ["Bash", "Cron", "API", "ETL"],
        live: "#",
        code: "#",
        gradient: "from-green-500/20 to-blue-500/20"
    },
    {
        title: "Pokedex API",
        description: "A backend-focused Pokedex with API integration, allowing for data retrieval and management of Pokémon information using Mongoose.",
        tech: ["React", "Node.js", "Mongoose", "API"],
        live: "#",
        code: "#",
        gradient: "from-yellow-500/20 to-red-500/20"
    },
    {
        title: "Translator API",
        description: "A simple and effective application that utilizes a translator API to convert text between different languages in real-time.",
        tech: ["React", "API", "CSS"],
        live: "#",
        code: "#",
        gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
        title: "Snake Game",
        description: "The classic Snake game with increasing speed, collision detection, scoring, and smooth animations for an engaging experience.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "#",
        code: "#",
        gradient: "from-green-500/20 to-yellow-500/20"
    },
];

/**
 * @typedef {Object} NavLink
 * @property {string} id - The unique identifier for the link, used for scrolling.
 * @property {string} title - The text displayed for the link.
 * @property {string} icon - The Font Awesome icon class (e.g., 'fa-home').
 */
export const navLinks = [
    { id: 'home', title: 'Home', icon: 'fa-solid fa-house' },
    { id: 'about', title: 'About', icon: 'fa-solid fa-user' },
    { id: 'skills', title: 'Skills', icon: 'fa-solid fa-code' },
    { id: 'projects', title: 'Projects', icon: 'fa-solid fa-briefcase' },
    { id: 'contact', title: 'Contact', icon: 'fa-solid fa-envelope' },
];

export const contactInfo = {
    email: "456amarnath@gmail.com",
    phone: "+91 8895715145",
    location: "Berhampur, Odisha",
    github: "https://github.com/Amar-03creator",
    linkedin: "https://www.linkedin.com/in/amarnath-nayak-5783721b9/",
    twitter: "https://x.com/AmarnathN71532"
};
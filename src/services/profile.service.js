const profile = {
    personal: {
        name: "Het Mewada",
        title: "Full Stack Developer | MERN",
        email: "hetmwd1384@gmail.com",
        phone: "+91 6351631866",
        location: "Ahmedabad, Gujarat, India",
        linkedin: "https://linkedin.com/in/het-mewada"
    },

    profileSummary:
        "Full-stack web developer specializing in the MERN stack with hands-on experience implementing production-level features such as JWT authentication, admin dashboards, optimized API workflows, payment integrations, and OAuth authentication. Passionate about building scalable applications and continuously improving development skills through real-world projects.",

    education: [
        {
            degree: "Bachelor of Engineering",
            branch: "Information Technology",
            institute: "Ahmedabad Institute of Technology",
            location: "Ahmedabad, Gujarat",
            cgpa: "8.0/10",
            duration: "2023 - 2026"
        },
        {
            degree: "Diploma",
            branch: "Information Technology",
            institute: "R.C Technical Institute",
            location: "Ahmedabad, Gujarat",
            cgpa: "7.55/10",
            duration: "2020 - 2023"
        }
    ],

    skills: {
        frontend: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS"
        ],

        backend: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication"
        ],

        database: [
            "MongoDB",
            "Mongoose",
            "MySQL"
        ],

        tools: [
            "Git",
            "GitHub",
            "Postman",
            "Thunder Client"
        ]
    },

    projects: [
        {
            name: "EcoSphere",
            type: "Environmental Awareness Platform",
            liveUrl: "https://eco-sphere-official.netlify.app",
            techStack: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Stripe",
                "Cloudinary",
                "Google OAuth"
            ],
            features: [
                "JWT-based Authentication & Authorization",
                "Google OAuth Login",
                "Stripe Payment Gateway Integration",
                "Shopping Cart System",
                "Order History Tracking",
                "Cloudinary Image Uploads",
                "RESTful API Development",
                "Frontend Deployment on Netlify",
                "Backend Deployment on Render"
            ]
        },

        {
            name: "TypeX",
            type: "Typing Speed Test Platform",
            techStack: [
                "React.js",
                "JavaScript",
                "Node.js"
            ],
            features: [
                "Typing Speed Measurement",
                "Words Per Minute (WPM) Calculation",
                "Accuracy Tracking",
                "Error Detection",
                "Random Text Generation",
                "Multiple Test Durations",
                "Performance Analytics",
                "Result History Dashboard"
            ]
        }
    ],

    experience: [
        {
            company: "YHills Edutech",
            role: "Full Stack Web Development Intern",
            duration: "2 Months",
            mode: "Remote"
        },
        {
            company: "CreArt Solutions",
            role: "MERN Stack Development Intern",
            duration: "15 Days",
            mode: "On-site"
        }
    ],

    certifications: [
        "HACKOUT'25 Hackathon Participant (DA-IICT)",
        "MERN Stack Internship - CreArt Solutions",
        "Web Development Internship - YHills",
        "Technosparx 2024 Cyber Security Workshop",
        "Technosparx 2024 Full Stack with Python Workshop",
        "Outskill Generative AI Mastermind Program",
        "AIT Khel League 2025 Cricket Participant"
    ]
};

export default profile;
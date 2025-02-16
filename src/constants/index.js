export const navLinks = [
    {
        id: 1,
        name: "Home",
        href: "#home",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Work",
        href: "#work",
    },
    {
        id: 4,
        name: "Contact",
        href: "#contact",
    },
];

// TODO: Modify this section
export const myProjects = [
    {
        title: 'MedFinder - AI-Powered Medical App',
        desc: 'MedFinder is an AI-driven Android app that helps users locate nearby pharmacies, find medicines through prescription or image recognition, set treatment reminders, and track health metrics like BMI and BMR. It also features AI-powered diagnosis and medicine recommendations for a smarter healthcare experience.',
        subdesc:'Developed with Kotlin and Clean Architecture, MedFinder utilizes Room Database, Retrofit for API communication, Google Maps for location services, and AI for image recognition and diagnosis. It offers a seamless and intelligent solution for medicine discovery, treatment management, and health monitoring.'
            , href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: 'rgba(246,156,28,0.15)',
            border: '0.2px solid #422D0D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Kotlin',
                path: '/assets/kotlin.svg',
            },
            {
                id: 2,
                name: 'Android Jetpack',
                path: 'assets/jetpack.svg',
            },
            {
                id: 3,
                name: 'Retrofit',
                path: '/assets/retrofit.svg',
            },
            {
                id: 4,
                name: 'Room Database',
                path: '/assets/room.svg',
            },
            {
                id: 5,
                name: 'Google maps',
                path: '/assets/maps.svg',
            },
        ],
    },
    {
        title: 'GeoGlimpse - AI Landmark Detection App',
        desc: 'GeoGlimpse is a landmark detection app that uses AI to identify landmarks in images. It uses a custom-trained model to identify landmarks in images and provides its results in real-time without any internet connection.',
        subdesc:
            'Built as an innovative mobile application using Jetpack Compose and TensorFlow, GeoGlimpse is designed for cutting-edge user experience and machine learning capabilities, ensuring seamless functionality and scalability.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Kotlin',
                path: '/assets/kotlin.svg',
            },
            {
                id: 2,
                name: 'Jetpack Compose',
                path: 'assets/compose.svg',
            },
            {
                id: 3,
                name: 'TensorFlow',
                path: '/assets/tensorflow.svg',
            },
            {
                id: 4,
                name: 'Koin',
                path: '/assets/koin.svg',
            },
            {
                id: 5,
                name: 'Room Database',
                path: '/assets/room.svg',
            },
        ],
    },
    {
        title: 'Task Manager – Efficient To-Do & Productivity Tracker',
        desc: 'Task Manager is a sleek and intuitive Android app designed to help users organize their daily tasks efficiently. It allows users to create, update, and manage to-do lists with a smooth user experience, ensuring productivity and task completion.',
        subdesc:
            'Built with Kotlin and following Clean Architecture principles, Task Manager leverages Room Database for offline storage, MVVM for structured UI interactions, and Jetpack Compose for a modern UI experience. It provides an easy-to-use platform for managing tasks effectively.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.webp',
        logoStyle: {
            backgroundColor: '#424875',
            border: '0.2px solid #272a45',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Kotlin',
                path: '/assets/kotlin.svg',
            },
            {
                id: 2,
                name: 'Jetpack Compose',
                path: 'assets/compose.svg',
            },
            {
                id: 3,
                name: 'Room Database',
                path: '/assets/room.svg',
            },{
                id: 4,
                name: 'Dagger Hilt',
                path: '/assets/dagger.svg',
            },
        ],
    },
];

export const workExperience = [ {
    index: 1,
    position: 'Android Developer Intern',
    company: 'Prodigy InfoTech',
    location: 'Remote',
    duration: 'December, 2024 - January, 2025',
    desc: 'Prodigy InfoTech is a technology company that provides internships in mobile development, web development, machine learning, and data science. It focuses on offering hands-on experience through real-world projects, helping individuals develop practical skills and industry knowledge in a supportive learning environment.',
    icon: '/assets/prodigy.png',
},]

export const aboutMe = {
        image: '/assets/grid1.png',
        headText: 'Hi, I\'m Youssef',
        subText: 'With 1 year of experience, I have honed my skills in mobile development, with a focus on user friendly application',
    };

export const techStack = {
        image: '/assets/grid2.png',
        headText: 'Tech Stack',
        subText: 'I specialize in Kotlin/Java with a focus on Native android and compose'
};

export const passion ={
    image: '/assets/grid3.png',
    headText: 'My passion for Coding',
    subText: 'Love to solve problems and create things through code. Coding with fun and passion.'
};

export const work = {
    headText: 'Available to work remotely/on site.',
    subText: 'I am currently based in Ismailia, Egypt, with remote work available.'

}

export const calculateSizes = (isSmall, isMobile) => {
    return {
        scale: isSmall ? 0.8 : isMobile ? 0.7 : 1,
    };
};
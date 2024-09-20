import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
//import recordPlayerImage from '../images/recordPlayer.webp'; // Adjust the path as per your directory structure


const ProjectsGrid = () => {
    // Example data - this could come from a database or API in a real-world scenario
    const projects = [
        {
            imageUrl: require(`../images/RaceTimePredictorAppIcon.webp`),
            title: 'Race Time Predictor | First IOS App',
            what: 'calculate your predicted running race times based off your Apple Watch data',
            how: ' Xcode (SwiftUI), AppleHealthKit, App Store Connect',
            why: "i run and need a ‘first’ app for incremental leaps",
            url: 'https://declankramper.notion.site/Race-Time-Predictor-App-6a485fdb13d84d07ab26e2aa7c3b2de0?pvs=4'
        },
        {
            imageUrl: require(`../images/recordPlayer.webp`),
            title: 'Magic Record Player',
            what: 'magically play the soundtrack of your memories.',
            how: 'a raspberry pi running a python script to interact with NFC tagged photos',
            why: 'create a special gift for the special people in my life while learning how to build an idea inspired by Harry Potter',
            url: 'https://declankramper.notion.site/NFC-Record-Player-Build-bf95a606cc474c11a626b50821fb12d4?pvs=4'
        },
        {
            imageUrl: require(`../images/MeetOrNot.webp`),
            title: 'Meet or Not | AI-powered Tool For Productive Meetings',
            what: '[full stack] web app to save you time and energy when creating your next meeting',
            how: 'determines if a meeting is needed (logical checks) and if so, creates an effective meeting agenda (OpenAI GPT-4 integration)',
            why: "to learn more about generative AI applications ",
            url: 'https://meetornot.io'
        },
        {
            imageUrl: require(`../images/soundcloud.webp`),
            title: 'Souncloud Downloader',
            what: 'easily download songs from soundcloud, with option for entire playlist at once',
            how: 'python script and fancy error handling',
            why: 'so DJs can make the people dance, for free',
            url: 'https://github.com/declankra/soundcloudToMp3'
        },
        {
            imageUrl: require(`../images/projectDbIntegration.webp`),
            title: 'Project Database & Live Component Integration',
            what: "organize, manage, and track my personal projects with a live feature displaying 'in progress' projects on the homepage",
            how: "pub/sub scheduler triggers gcloud function (<-> notion API) that stores json in gcloud bucket and is fetched/rendered on FE",
            why: "clearer focus on my work and a cool dynamic component for ownership",
            url: 'https://declankramper.notion.site/Project-Database-Component-Integration-d8153c0d24d84274befe99ba4056604f?pvs=4'
        },
        {
            imageUrl: require(`../images/healthDashboard.webp`),
            title: 'Health Dashboard | "Whoop app" for Apple Watch',
            what: 'a live dashboard of my health goals',
            how: 'google cloud functions and APIs send data to google sheets that is sourced in looker studio report',
            why: 'visually track progress towards my health goals',
            url: 'https://www.declankramper.me/health'
        },
        {
            imageUrl: require(`../images/goalsComponentSketch.webp`),
            title: 'Visual Goal Tracker',
            what: 'visual progress towards my 2024 goals',
            how: 'FE React fetch API gets data from a google sheet (db) which is populated by external APIs',
            why: '“seeing” progress gives focus, clarity, and accountability in achieving goals',
            url: 'https://www.declankramper.me/goals'
        },
        {
            imageUrl: require(`../images/declanKramperCropped.webp`),
            title: 'Personal Portfolio',
            what: 'personal website to showcases my personal projects, declankramper.me',
            how: 'web dev tools and figuring it out',
            why: "it’s creative, visible, and a challenge",
            url: 'https://declankramper.notion.site/My-Online-Portfolio-23b32f724d974f9c905ea25c86e580a9?pvs=4'
        },
       
       
        // ... more projects
    ];

    return (
        <Grid container spacing={3}>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </Grid>
    );
};

export default ProjectsGrid;

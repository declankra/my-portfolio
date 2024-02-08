import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
//import recordPlayerImage from '../images/recordPlayer.jpeg'; // Adjust the path as per your directory structure


const ProjectsGrid = () => {
    // Example data - this could come from a database or API in a real-world scenario
    const projects = [
        {
            imageUrl: require(`../images/declanKramperCropped.jpeg`),
            title: 'Personal Portfolio',
            what: 'personal website to showcases my personal projects, declankramper.me',
            how: 'web dev tools and figuring it out',
            why: "it’s creative, visible, and a challenge",
            url: 'https://declankramper.notion.site/My-Online-Portfolio-23b32f724d974f9c905ea25c86e580a9?pvs=4'
        },
        {
            imageUrl: require(`../images/recordPlayer.jpeg`),
            title: 'Magic Record Player',
            what: 'magically play the soundtrack of your memories.',
            how: 'a raspberry pi running a python script to interact with NFC tagged photos',
            why: 'create a special gift for the special people in my life while learning how to build an idea inspired by Harry Potter',
            url: 'https://declankramper.notion.site/NFC-Record-Player-Build-bf95a606cc474c11a626b50821fb12d4?pvs=4'
        },
        {
            imageUrl: require(`../images/healthVizSc.jpeg`),
            title: 'Health Dashboard | "Whoop app" for Apple Watch',
            what: 'a live dashboard of my health goals',
            how: 'google cloud functions and APIs send data to google sheets that is sourced in looker studio report',
            why: 'visually track progress towards my health goals',
            url: 'https://www.declankramper.me/health'
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

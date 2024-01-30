import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
//import recordPlayerImage from '../images/recordPlayer.jpeg'; // Adjust the path as per your directory structure


const ProjectsGrid = () => {
  // Example data - this could come from a database or API in a real-world scenario
  const projects = [
    {
      imageUrl: require(`../images/recordPlayer.jpeg`),
      title: 'Magic Record Player',
      what: 'Magically play the soundtrack of your memories.',
      how: 'A raspberry pi running a python script to interact with NFC tagged photos',
      why: 'Reason why project one exists.',
      url: 'https://declankramper.notion.site/NFC-Record-Player-Build-bf95a606cc474c11a626b50821fb12d4?pvs=4'
    },
    {
        imageUrl: require(`../images/recordPlayer.jpeg`),
        title: 'Magic Record Player',
        what: 'Magically play the soundtrack of your memories.',
        how: 'A raspberry pi running a python script to interact with NFC tagged photos',
        why: 'Reason why project one exists.',
        url: 'https://declankramper.notion.site/NFC-Record-Player-Build-bf95a606cc474c11a626b50821fb12d4?pvs=4'
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

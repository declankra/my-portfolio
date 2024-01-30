import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  // Example data - this could come from a database or API in a real-world scenario
  const projects = [
    {
      imageUrl: 'image_url_1.jpg',
      title: 'Project One',
      what: 'Description of what project one is.',
      how: 'Explanation of how project one works.',
      why: 'Reason why project one exists.',
      url: 'https://example.com/project1'
    },
    // ... more projects
  ];

  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Grid>
  );
};

export default ProjectsGrid;

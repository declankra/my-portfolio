import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Link } from '@mui/material';

const WhatAmIDoing = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if data is already fetched and stored
                const storedProjects = sessionStorage.getItem('projects');
                if (storedProjects) {
                    setProjects(JSON.parse(storedProjects));
                    return;
                }
    
                const response = await fetch('https://storage.googleapis.com/notion-projects-database_component-source/simplifiedNotionData.json');
                if (!response.ok) throw new Error('Network response was not ok');
    
                const data = await response.json();
                sessionStorage.setItem('projects', JSON.stringify(data)); // Cache data in session storage
                setProjects(data); // Update to use directly fetched data
            } catch (error) {
                console.error('Fetch error:', error);
                // Handle the error (show a message, etc.)
            }
        };
    
        fetchData();
    }, []);

    // Adjusted to handle tags more generically, not based on specific values
    const getColor = (status) => {
        switch (status) {
            case 'In progress':
                return 'primary';
            case 'MVP Done':
            case 'Completed': // Assuming 'Completed' might be a possible status
                return 'success';
            default:
                return 'default';
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {projects.map((project, index) => (
                <Card key={index} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={project.image || 'default_image_url_here'} // Use lowercase 'image'
                        alt={project.project} // Use lowercase 'project'
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h5" component="div">
                            {project.project}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {project.summary}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            {project.whyICare}
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                            {project.tags.map((tag, i) => (
                                <Chip key={i} label={tag} color="default" /> // Always default for tags as color logic isn't specified}
                            ))}
                        </div>
                        <Chip label={project.status} color={getColor(project.status)} /> 
                        <Typography variant="body2" color="text.secondary">
                            Completion Date: {project.completionDate} 
                        </Typography>
                        <Link href={project.link} target="_blank" rel="noopener">
                            Learn More
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default WhatAmIDoing;

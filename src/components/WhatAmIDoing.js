import React, { useEffect, useState } from 'react';
import { Box, Card, Divider, CardContent, CardMedia, Typography, Chip, useTheme, useMediaQuery } from '@mui/material';


const WhatAmIDoing = () => {
    const [projects, setProjects] = useState([]);
    
    // Responsive design hooks
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cacheTimestamp = sessionStorage.getItem('cacheTimestamp');
                const now = new Date();

                // Check if 6 hours have passed since the last fetch
                if (cacheTimestamp && now - new Date(cacheTimestamp) < 5 * 60 * 60 * 1000) {
                    const storedProjects = sessionStorage.getItem('projects');
                    if (storedProjects) {
                        setProjects(JSON.parse(storedProjects));
                        return;
                    }
                }

                // Append timestamp to avoid browser cache
                const response = await fetch(`https://storage.googleapis.com/notion-projects-database_component-source/simplifiedNotionData.json?timestamp=${new Date().getTime()}`);
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                sessionStorage.setItem('projects', JSON.stringify(data)); // Cache data in session storage
                sessionStorage.setItem('cacheTimestamp', new Date()); // Update timestamp
                setProjects(data); // Update to use directly fetched data
            } catch (error) {
                console.error('Fetch error:', error);
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
        <Box display="flex" flexDirection="column" gap="20px" marginTop={'10px'}>
            {projects.map((project, index) => (
                <Card key={index} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between">
                        <CardContent>
                            <Typography sx={{typography: 'title'}} component="div">
                                {project.project}
                            </Typography>
                            <Typography sx={{ typography: 'subtitle', color: 'text.secondary', paddingBottom: '5px'}} component="div">
                                {project.summary}
                            </Typography>
                            <Typography sx={{ typography: 'body'}} component="div">
                                {project.whyICare}
                            </Typography>
                            <Box display="flex" flexDirection="row" gap="10px" flexWrap="wrap" my="10px">
                                {project.tags.map((tag, i) => (
                                    <Chip key={i} label={tag} color="default" size="small" />
                                ))}
                            </Box>
                            <Divider />
                            <Box display="flex" alignItems="center" gap="10px" my="10px">
                                <Chip variant='outlined' label={project.status} color={getColor(project.status)} />
                                <Typography sx={{ typography: 'extraText' }}>
                                    ETA: {project.dueDate}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                    {!isMobile && (
                        <CardMedia
                            component="img"
                            sx={{ width: 200, height: 'auto', objectFit: 'cover', objectPosition: 'center' }}
                            image={project.image || 'default_image_url_here'}
                            alt={project.project}
                        />
                    )}
                </Card>
            ))}
        </Box>
    );
};

export default WhatAmIDoing;

/*

                            <Link href={project.link} target="_blank" rel="noopener">
                                learn More
                            </Link>


*/

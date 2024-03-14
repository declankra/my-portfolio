import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const ProjectCard = ({ imageUrl, title, what, how, why, url }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardActionArea href={url} target="_blank">
          <CardMedia
            component="img"
            height="180"
            image={imageUrl}
            alt={title}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <CardContent sx={{ cursor: 'pointer' }}>
            <Typography sx={{ typography: 'titleProjectCard' }} component="div">
              {title}
            </Typography>
            <Typography sx={{ typography: 'bodyProjectCard', color: 'black' }}>
              <strong>What:</strong> {what}
            </Typography>
            <Typography sx={{ typography: 'bodyProjectCard', color: 'black' }}>
              <strong>How:</strong> {how}
            </Typography>
            <Typography sx={{ typography: 'bodyProjectCard', color: 'black' }}>
              <strong>Why:</strong> {why}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProjectCard;

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
            style={{ objectFit: 'fill', objectPosition: 'center' }}
          />
          <CardContent sx={{ cursor: 'pointer' }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>What:</strong> {what}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>How:</strong> {how}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Why:</strong> {why}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProjectCard;

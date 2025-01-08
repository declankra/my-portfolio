import React from 'react';
import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBanner = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#dc2626', // bright red
  color: '#ffffff',
  padding: '4px 0',
  fontSize: '0.75rem',
  textAlign: 'center',
  '& a': {
    color: '#ffffff',
    textDecoration: 'underline',
    marginLeft: '4px',
    '&:hover': {
      color: '#f3f4f6',
    },
  },
}));

const NotificationBanner = () => {
  return (
    <StyledBanner component="div">
      This site was retired on 12/31/24. It will serve as a snapshot of my work in 2024. Explore the future: 
      <Link 
        href="https://declankramper.com"
        target="_blank"
        rel="noopener"
      >
       declankramper.com
      </Link>
    </StyledBanner>
  );
};

export default NotificationBanner;
// Import functions from MUI
import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#0d3dce', // The main primary color used throughout the app
            light: '#7f8cff', // Lighter shade of the primary color
            dark: '#0043a4', // Darker shade of the primary color
            contrastText: '#ffffff', // Text color that ensures legibility with the primary color
        },
        secondary: {
            main: '#19857b',
            contrastText: '#000000',
            // Additional customizations can be done similarly
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#9e9e9e',
        },
        // Define more colors as needed
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        title: {
            fontSize: '1.25rem',
            fontWeight: '800',
            '@media (max-width:600px)': {
                fontSize: '1.1rem', // Smaller titles on mobile
            },
        },
        titleProjectCard:
        {
            fontSize: '1.30rem',
            fontWeight: '800',
            '@media (max-width:600px)': {
                fontSize: '1.1rem', // Smaller titles on mobile
            },
        },
        subtitle: {
            fontSize: '1.00rem',
            fontWeight: 400, // Normal weight for subtitles
            '@media (max-width:600px)': {
                fontSize: '.875rem', // Smaller subtitles on mobile
            },
        },
        subtitle2: {
            fontSize: '1.00rem',
            fontWeight: 400, // Normal weight for subtitles
            fontStyle: 'italic',
            '@media (max-width:600px)': {
                fontSize: '.875rem', // Smaller subtitles on mobile
            },
        },
        body: {
            fontSize: '.85rem',
            fontWeight: 300, // light body text
            '@media (max-width:600px)': {
                fontSize: '0.75rem', // Smaller body text on mobile
            },
        },
        body2: {
            fontSize: '.85rem',
            fontWeight: 300, // light body text
            fontStyle: 'italic',
            '@media (max-width:600px)': {
                fontSize: '0.75rem', // Smaller body text on mobile
            },
        },
        bodyProjectCard: {
            fontSize: '.9rem',
            fontWeight: 300, // Normal body text
            '@media (max-width:600px)': {
                fontSize: '0.75rem', // Smaller body text on mobile
            },
        },
        extraText: {
            fontSize: '0.85rem',
            fontWeight: 300, // Lighter for extra information
            '@media (max-width:600px)': {
                fontSize: '0.75rem', // Smaller extra text on mobile
            },
        },
        // Enhance the default variants to support bold and light colors
        h1: {
            fontWeight: 500, // Making h1 bold by default
            color: 'primary.dark', // Use dark primary color for h1
        },
        body1: {
            fontWeight: 300, // Lighter body text
            color: 'text.primary',
        },

        // Continue with other default variants as needed
        // Add custom styles for certain sections using color pallete, fontSize, fontWeight, fontFamily, textTransformation (uppercase/lowercase)
    },
});

export default theme;

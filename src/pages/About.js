import React, { useState } from 'react';
import './About.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function About() {
  

    return (
        <main>
            <section className='hero'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/declan-kramper" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                        <LinkedInIcon sx={{ fontSize: 45, color: 'blue' }} />
                    </a>
                    {/* GitHub Icon */}
                    <a href="https://github.com/declankra" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ fontSize: 40, color: 'black' }} />
                    </a>
                </div>
                <h1>About</h1>
                <p>hello world. page is under construction. for now, here's some resumes.</p>
            </section>
            <section className='body'>
            </section>
        </main>
    );
}

export default About;

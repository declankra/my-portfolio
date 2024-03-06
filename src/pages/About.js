import React, { useState } from 'react';
import './About.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ResumeViewer = ({ title, subtitle, path }) => (
    <div className="resume-container">
        <div className="resume-header">
            <h2 className="resume-title">{title}</h2>
            <p className="resume-subtitle">last updated: {subtitle}</p>
        </div>
        <div className="pdf-container">
            <object data={path} type="application/pdf" width="100%" height="100%">
                <p>Your viewport is too small. <a href={path}>Download the PDF</a>.</p>
            </object>
        </div>
    </div>
);

function About() {
    const [selectedResume, setSelectedResume] = useState('PM');
    const resumes = {
        PM: {
            title: "Product Development Resume",
            subtitle: "June 2023",
            path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_PM.pdf',
        },
        TD: {
            title: "Delivery Analyst Resume",
            subtitle: "Feb 2024",
            path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_DeliveryAnalyst.pdf',
        }
    };

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
                <div className='resume-section'>
                    <div className="resume-switch">
                        <button className="resume-button" onClick={() => setSelectedResume('PM')}>Product Development Resume</button>
                        <button className="resume-button" onClick={() => setSelectedResume('TD')}>Delivery Analyst Resume</button>
                    </div>
                    <ResumeViewer {...resumes[selectedResume]} />
                </div>
            </section>
        </main>
    );
}

export default About;

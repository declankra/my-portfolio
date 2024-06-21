import React, { useState } from "react";
import './Resume.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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


function Resume() {

    const [selectedResume, setSelectedResume] = useState('TR');
    const resumes = {
        PM: {
            title: "Product Development Resume",
            subtitle: "June 2023",
            path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_PM.pdf',
        },
        DA: {
            title: "Delivery Analyst Resume",
            subtitle: "Feb 2024",
            path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_DeliveryAnalyst.pdf',
        },
        TR: {
            title: "Trader Resume",
            subtitle: "June 2024",
            path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_Trader.pdf',
        }
    };


    return (
        <main>
            {/* Back Icon */}
            <a href="https://www.declankramper.me/about" style={{ marginRight: '10px' }}>
            <ArrowBackIcon sx={{ fontSize: 40, color: 'blue' }} />
            </a>
            <h1>Resume</h1>
            <div className='resume-section'>
                <div className="resume-switch">
                    <button className={`resume-button ${selectedResume === 'TR' ? 'selected' : ''}`} onClick={() => setSelectedResume('TR')}>Trader Resume</button>
                    <button className={`resume-button ${selectedResume === 'PM' ? 'selected' : ''}`} onClick={() => setSelectedResume('PM')}>Product Development Resume</button>
                    <button className={`resume-button ${selectedResume === 'DA' ? 'selected' : ''}`} onClick={() => setSelectedResume('DA')}>Delivery Analyst Resume</button>
                </div>
                <ResumeViewer {...resumes[selectedResume]} />
            </div>
        </main>
    )
}
export default Resume;
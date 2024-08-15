import React, { useState } from "react";
import './Resume.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactGA from "react-ga4";
ReactGA.initialize('G-YVX9YT52JE');

const ResumeViewer = ({ title, versions }) => (
    <div className="resume-container">
        <div className="resume-header">
            <h2 className="resume-title">{title}</h2>
            {versions.map((version, index) => (
                <div key={index} className="version-container">
                    <p className="resume-subtitle">version: {version.subtitle}</p>
                    <div className="pdf-container">
                        <object data={version.path} type="application/pdf" width="100%" height="100%">
                            <p>Your viewport is too small. <a href={version.path}>Download the PDF</a>.</p>
                        </object>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

function Resume() {
    const [selectedResume, setSelectedResume] = useState('PM');
    const resumes = {
        PM: {
            title: "Product Management Resume",
            versions: [
                { subtitle: "Aug 2024", path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_PM_08152024.pdf' },
                { subtitle: "June 2023", path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_PM_06012023.pdf' }
            ]
        },
        DA: {
            title: "Delivery Analyst Resume",
            versions: [
                { subtitle: "Feb 2024", path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_DeliveryAnalyst.pdf' }
            ]
        },
        TR: {
            title: "Trader Resume",
            versions: [
                { subtitle: "June 2024", path: process.env.PUBLIC_URL + '/DeclanKramper_Resume_Trader.pdf' }
            ]
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
                    <button className={`resume-button ${selectedResume === 'PM' ? 'selected' : ''}`} onClick={() => setSelectedResume('PM')}>Product Management</button>
                    <button className={`resume-button ${selectedResume === 'TR' ? 'selected' : ''}`} onClick={() => setSelectedResume('TR')}>Trader</button>
                    <button className={`resume-button ${selectedResume === 'DA' ? 'selected' : ''}`} onClick={() => setSelectedResume('DA')}>Delivery Analyst</button>
                </div>
                <ResumeViewer {...resumes[selectedResume]} />
            </div>
        </main>
    )
}
export default Resume;
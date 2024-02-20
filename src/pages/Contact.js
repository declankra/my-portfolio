import React, { useState } from 'react';
import './Contact.css';

const Resume = ({ title, subtitle, path }) => {
    return (
        <div className="resume-container">
            <div className="resume-header">
                <h2 className="resume-title">{title}</h2>
                <p className="resume-subtitle">last updated: {subtitle}</p>
            </div>
            <div className="pdf-container">
                <object
                    data={path}
                    type="application/pdf"
                    width="100%"
                    height="100%">
                    <p>Your viewport is too small.
                        <a href={path}>Download the PDF</a>.</p>
                </object>
            </div>
        </div>
    );
};

function Contact() {
    const [selectedResume, setSelectedResume] = useState('PM'); // PM for Product Management, TD for Technical Development
    const resumes = {
        PM: {
            title: "Product Development Resume",
            subtitle: "June 2023",
            path: process.env.PUBLIC_URL + 'DeclanKramper_Resume_PM.pdf',
        },
        TD: {
            title: "Delivery Analyst Resume",
            subtitle: "Feb 2024",
            path: process.env.PUBLIC_URL + 'DeclanKramper_Resume_DeliveryAnalyst.pdf',
        }
    };
    const buttonStyle = {
        background: 'white',
        color: 'blue',
        border: 'none',
        cursor: 'pointer',
        padding: '5',
    };

    return (
        <main>
            <h1>Contact</h1>
            <p>hello world</p>
            <div className="resume-switch" style={{ textAlign: 'center'}}>
                <button style={buttonStyle} onClick={() => setSelectedResume('PM')}>Product Development Resume</button>
                <button style={buttonStyle} onClick={() => setSelectedResume('TD')}>Delivery Analyst Resume</button>
            </div>
            <Resume {...resumes[selectedResume]} />
        </main>
    );
}

export default Contact;

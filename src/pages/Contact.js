import React from "react";
import './Contact.css'

const Resume = () => {
    const ResumePath = process.env.PUBLIC_URL + 'DeclanKramper_Resume_05082023.pdf'
    return (
        <div className="resume-container">
            <div className="resume-header">
                <h2 className="resume-title">Product Development Resume</h2>
                <p className="resume-subtitle">last updated: May 05 2023</p>
            </div>
            <div className="pdf-container">
                <object
                    data={ResumePath}
                    type="application/pdf"
                    width="100%"
                    height="100%">
                    <p>Your viewport is too small.
                        <a href="/DeclanKramper_Resume_05082023.pdf">Download the PDF</a>.</p>
                </object>
            </div>
        </div>
    );
};

function Contact() {
    return (
        <main>
            <p>hello world</p>
            <Resume />
        </main>
    )
}

export default Contact;
import React from "react";
import ReactGA from "react-ga4";
ReactGA.initialize('G-YVX9YT52JE');


const pdfManual = process.env.PUBLIC_URL + '/DeclanKramper_WorkingWithMe_Manual.pdf';

function Manual() {
    return (
        <main>
        <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px', color: '#666' }}>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <span role="img" aria-label="construction">🚧</span>
                This page is currently a work in progress.
                <span role="img" aria-label="construction">🚧</span>
            </p>
        </div>
        </main>
    )
}

export default Manual;

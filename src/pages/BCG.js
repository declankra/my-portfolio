import React from "react";

const BCGResumePath = process.env.PUBLIC_URL + '/DeclanKramper_ResumeBCG.pdf';

function BCG() {
    return (
        <main>
            <h1>Hi BCG</h1>
            <p>Application for REF #62054</p>
            <object data={BCGResumePath} type="application/pdf" width="100%" height="1000px">
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={BCGResumePath}>Download PDF</a>.</p>
            </object>
        </main>
    );
}

export default BCG;

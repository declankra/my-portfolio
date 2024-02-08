import React from "react";
import './Health.css'

const iframeHtml = {
    __html: `<iframe width="700" height="500" src="https://lookerstudio.google.com/embed/reporting/8667b22a-1248-4f1b-a3f3-8cbc158f00a6/page/3FkpD" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`
};

const dashboardButton = () => {

}

function Health() {
    return (
        <main>
            <h1>Health</h1>
            <div className="container">
            <h2>Health Dashboard Project</h2>
            <div dangerouslySetInnerHTML={iframeHtml} />
            </div>
        </main>
    )
}
export default Health;
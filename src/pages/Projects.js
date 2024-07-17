import React from "react";
import './Projects.css'
import ProjectsGrid from "../components/ProjectsGrid";
import ReactGA from "react-ga4";
ReactGA.initialize('G-YVX9YT52JE');

function Projects() {
    return (
        <main>
            <h1>Completed Projects</h1>
            <ProjectsGrid/>
        </main>
    )
}

export default Projects;
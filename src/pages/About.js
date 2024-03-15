import React from 'react';
import './About.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';




function About() {


    return (
        <main>
            <section className='hero'>
                <h1>About</h1>
            </section>

            <div className = 'body'>
            <div className='findMe' style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <h3>You can find me...</h3>
                <p >elsewhere on the intenet</p>
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

                <p>or in person</p>
                <li><a href = "https://www.strava.com/athletes/98367252">running</a> on the lakeshore path</li>
                <li>trying a new <a href = "https://www.icloud.com/notes/09eYa9zcbOnblaYQQ4n6YD7NQ#Coffee_shop_rankings">coffee shop</a></li>
                <li>riding a divvy bike at night</li>                
            </div>
            
            <h3>If a convential resume interests you...</h3>
            {/* PDF Icon */}
            <a href="https://www.declankramper.me/resume" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                        <ContactPageIcon sx={{ fontSize: 45, color: 'black' }} />
                    </a>
            <p>here's mine. but im hoping to tell that story differently.</p>
            </div>
        </main>
    );
}

export default About;

import React from 'react';
import './About.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function About() {


    return (
        <main>
            <section className='hero'>
                <h1>About</h1>
            </section>

            <div className='body'>
                <div className='findMe centered-container'>
                    <h3>You can find me...</h3>
                    <p >elsewhere on the intenet</p>
                    <div className='centered-icons'>
                        {/* LinkedIn Icon */}
                        <a href="https://www.linkedin.com/in/declan-kramper" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
                            <LinkedInIcon sx={{ fontSize: 45, color: 'blue' }} />
                        </a>
                        {/* GitHub Icon */}
                        <a href="https://github.com/declankra" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
                            <GitHubIcon sx={{ fontSize: 40, color: 'black' }} />
                        </a>
                        {/* Twitter Icon */}
                        <a href="https://twitter.com/asbestostrades" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
                            <XIcon sx={{ fontSize: 40, color: 'blue' }} />
                        </a>
                        {/* Goodreads Icon */}
                        <a href="https://www.goodreads.com/user/show/156508418-declan" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
                            <AutoStoriesIcon sx={{ fontSize: 45, color: 'black' }} />
                        </a>
                    </div>

                    <p>or in person</p>
                    <ul className='centered-list'>
                        <li><a href="https://www.strava.com/athletes/98367252">running</a> on the lakeshore path</li>
                        <li>trying a new <a href="https://www.icloud.com/notes/09eYa9zcbOnblaYQQ4n6YD7NQ#Coffee_shop_rankings">coffee shop</a></li>
                        <li>riding a divvy bike</li>
                    </ul>
                </div>

                <div className='otherThings centered-container'>
                    <h3>Some other things...</h3>
                    <p>career related</p>
                    <ul className='centered-list'>
                        <li>conventional <a href="https://www.declankramper.me/resume">resumes</a> (but i'm hoping to tell that story differently)</li>
                        <li>'working with me' <a href="https://declankramper.notion.site/How-to-Work-With-Me-6174c60ed7f240e1b572343847006fe5?pvs=4">guide</a></li>
                    </ul>
                    <p>misc</p>
                    <li>playlists for <a href='https://open.spotify.com/playlist/02NLf38vf4rUB6VpUsEm49?si=c1d074e3223d42dd'>EOD grinds</a>, <a href="https://open.spotify.com/playlist/7lm0xMLRiFr4vEa6kVBrae?si=f6bcfe3985694066">flow state</a> energy, or great <a href = "https://open.spotify.com/playlist/64nUAC1xAKKr5rA1WGP6jE?si=1650f5af37cf4868">podcasts</a></li>
                </div>

            </div>
        </main>
    );
}

export default About;


{/*
                        <h3>Some other things to checkout</h3>
                        <a href="" style={{ marginRight: '10px' }}>
                                    <PictureAsPdfIcon sx={{ fontSize: 45, color: 'black' }} />
                                </a>
                        <p>'Working with me' guide</p>
                        
                    
                        /* PDF Icon 
                        <a href="" style={{ marginRight: '10px' }}>
                                    <ContactPageIcon sx={{ fontSize: 45, color: 'black' }} />
                                </a>
                        <p>conventional resumes (but im hoping to tell my story differently)</p>

                    */}
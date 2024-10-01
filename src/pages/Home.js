import React from "react";
import './Home.css'
import WhatAmIDoing from '../components/WhatAmIDoing';

import ReactGA from "react-ga4";
ReactGA.initialize('G-YVX9YT52JE');

const Avatar = () => {
  const avatarPath = process.env.PUBLIC_URL + 'Avatar_ME_PS.webp'
  return (
    <img className="avatar"
      src={avatarPath}
      alt={'Declan Kramper Profile'}
      style={{
        width: 125,
        height: 125
      }}
    />
  )
}

const nameStyle = {
  fontWeight: "bold",
}

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-text">
        <h1 style={nameStyle}>Declan Kramper</h1>
        <p>Building a website to showcase my work</p>
      </div>
      <div className="profile-avatar">
        <Avatar />
      </div>
    </div>
  );
};

function Home() {
  return (
    <main>
      <section className="hero">
        <Profile />
      </section>
      <section className="body">
        <div className="welcome-message">
          <h2>Hi!</h2>
          <p>
            Welcome to my space on the internet. I enjoy learning about and (moreso lately) building products. This website is one of those products - it'll always be a WIP as I continually add newly completed <strong> <a href="/projects">projects</a>,</strong> thoughts on the <a href="https://declankramper.notion.site/Declan-s-Blog-35febfb6dfe04ac0a2a70538fd3b2402?pvs=4">blog</a>, and polishing touches. <br></br><br></br>Ultimately, I hope to positively impact the lives of others through my own products. <br></br><br></br> The date in the footer keeps me honest - check back soon for new developments!
          </p>
        </div>
        <div className="doing-now">
          <h2>What am I building now?</h2>
          <WhatAmIDoing />
        </div>
      </section>
    </main>
  );
};

export default Home;
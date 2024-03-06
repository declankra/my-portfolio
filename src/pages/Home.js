import React from "react";
import './Home.css'
import WhatAmIDoingNow from './WhatAmIDoingNow';


const Avatar = () => {
  const avatarPath = process.env.PUBLIC_URL + 'Avatar_ME_PS.jpeg'
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
            Welcome to my space on the internet. I enjoy learning about and (moreso lately) building products. This website is one of those products - it'll always be a WIP as I continually add newly completed <a href="/projects">projects</a>, thoughts on the <a href="https://declankramper.notion.site/Declan-s-Blog-35febfb6dfe04ac0a2a70538fd3b2402?pvs=4">blog</a>, and polishing touches. <br></br><br></br>Ultimately, I hope to positively impact others through one of my own products. <br></br><br></br> The date in the footer keeps me honest - check back soon for new developments!
          </p>
        </div>
        <div className="doing-now">
        <WhatAmIDoingNow />
        </div>
      </section>

      {/* Rest of the homepage content */}
    </main>
  );
};

export default Home;
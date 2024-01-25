import React from "react";
import './Home.css'


const Avatar = () => {
  const avatarPath = process.env.PUBLIC_URL + 'Avatar_Me_PS.png'
  return(
    <img className="avatar"
      src={avatarPath}
      alt={'Declan Kramper Profile'}
      style = {{
        resizeMode: 'center',
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
          <Profile/>
      </main>
    );
  };
  
  export default Home;
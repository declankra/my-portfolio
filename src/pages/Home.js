import React from "react";


const Avatar = () => {
  const avatarPath = process.env.PUBLIC_URL + 'Avatar_Me_PS_Blue.png'
  return(
    <img classNAme="avatar"
      src={avatarPath}
      alt={'Declan Kramper Profile Picture'}
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

function Home() {
    return (
      <div className="Home">
          <div className="header">
            <h1 style={nameStyle}>Declan Kramper</h1>
            <Avatar />
          </div>
      </div>
    );
  };
  
  export default Home;
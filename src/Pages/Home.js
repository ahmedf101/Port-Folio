import React from "react";

function Home(){
    return(
        <div>
        
            <div className="parent">
        <div className="text-container">
          <h1>
            Hi,👋
            <br />
            My Name is
          </h1>
          <div>
            <h1 className="text">Ahmed</h1>
            <h2>I build things for Web.</h2>
          </div>
        </div>
        <div className="image-container">
          <img src="profile.jpg" alt="ahmed" />
        </div>
      </div>
        </div>
    );
}
export default Home;

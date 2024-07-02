import React from "react";
import "./Project.css";

function Project(props){
    return(
        <div className="projects-container">
            <div className="header">
                <h1>Projects</h1> 
            </div>
            <div className="secondHeading">
            <h2 className="secondHeading">Things I Have Built So Far</h2>
            </div>
            <div className="images-container">
                <div className="row">
                    <div className="card">
                        <img className="card-img" src="Rectangle 1.png" alt="rectangle 1" />
                        <div className="card-content">
                            <h3 className="card-title">Project 1</h3>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <p>Tech stack : HTML , JavaScript, SASS, React</p>
                            <div className="link">
                            <img src="link-chain.png" alt="link" />                            
                            <a href="link">Link Preview</a>
                             View Code
                            <img src="github-icon.png" alt="github Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="Rectangle 2.png" alt="rectangle 2" />
                        <div className="card-content">
                            <h3 className="card-title">Project 2</h3>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <p>Tech stack : HTML , JavaScript, SASS, React</p>
                            <div className="link">
                            <img src="link-chain.png" alt="link" />                            
                            <a href="link">Link Preview</a>
                             View Code
                            <img src="github-icon.png" alt="github Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-image" src="Rectangle 3.png" alt="rectangle 3" />
                        <div className="card-content">
                            <h3 className="card-title">Project 3</h3>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <p>Tech stack : HTML , JavaScript, SASS, React</p>
                            <div className="link">
                            <img src="link-chain.png" alt="link" />                            
                            <a href="link">Link Preview</a>
                             View Code
                            <img src="github-icon.png" alt="github Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <img className="card-image" src="Rectangle 4.png" alt="rectangle 4" />
                        <div className="card-content">
                            <h3 className="card-title">Project 4</h3>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <p>Tech stack : HTML , JavaScript, SASS, React</p>
                            <div className="link">
                            <img src="link-chain.png" alt="link" />                            
                            <a href="link">Link Preview</a>
                             View Code
                            <img src="github-icon.png" alt="github Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-image" src="Rectangle 5.png" alt="rectangle 5" />
                        <div className="card-content">
                            <h3 className="card-title">Project 5</h3>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <p>Tech stack : HTML , JavaScript, SASS, React</p>
                            <div className="link">
                            <img src="link-chain.png" alt="link" />                            
                            <a href="link">Link Preview</a>
                             View Code
                            <img src="github-icon.png" alt="github Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                    <img src="Rectangle 6.png" alt="rect" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Project 6</h3>
                            <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <p>Tech stack : HTML , JavaScript, SASS, React</p>
                            <div className="link">
                            <img src="link-chain.png" alt="link" />                            
                            <a href="link">Link Preview</a>
                             View Code
                            <img src="github-icon.png" alt="github Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
      
    
}

export default  Project;
import React from 'react';
import { workDetails, eduDetails } from '../Details'; 
import Work from '../Components/Work'; 

function About() {
  return (
    <main className="container">
      <section>
        <h1 className="heading">About Me</h1>
        <p className="content">The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
      </section>
      <section>
        <h1 className="heading">Work Experience</h1>
        {workDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
          <Work
            key={`work-${index}`}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>
      <section>
        <h1 className="heading">Education</h1>
        {eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
          <Work
            key={`edu-${index}`}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>
    </main>
  );
}

export default About;

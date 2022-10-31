import React from "react";
import "./Resume.css";

export default function Resume() {
  const buttonPDF = () => {
    // using Java Script method to get PDF file
    fetch("images/Ryan-Soto-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        // alink.download = 'Ryan-Soto-Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className="bg-image">
      <div className="container">
        
        <div className="inner-body-container">
          <br></br>
          <h1>Resume</h1>
          <div className="resume-header">

            <h1> Software Developer</h1>
            <button onClick={buttonPDF}>PDF</button>
            </div>
            <div className="resume-body">
            <h2> Goals</h2>
            <p>
              Up and coming software developer currently freelancing as a PHP
              developer. I'm looking to hone my coding skills being a productive
              member of my next team while surpassing all expectations. My goal
              is to become a Senior Software Developer in the not too distant
              future.
            </p>
            <h2> Experience</h2>
            <h3> PHP</h3>
            <p>
              Web development from the top to the bottom. Front-end and back-end
              implementation of PHP to construct websites and communicate with
              SQL databases. Designed and built from scratch databases to be
              used managing user data, facilitate book keeping, construct forms
              and receipts, or collect and store feedback. Keeping databases
              secure with privileged access and hashed data.{" "}
            </p>
            <h3> JavaScript</h3>
            <p>
              Developing a doordashing game as hobby using OOP with vanilla
              JavaScript as a way to break the monotony of work. This uses
              mostly JavaScript with a plethora of CSS and a bit of HTML. I
              assembled the art using Tiled for the maps and Aesprite for the
              characters/objects.
            </p>
            <h3> Python</h3>
            <p>
              I started my reentry into programming two years ago by learning
              Python and completing challenges on codewars, hackerrank, and
              leetcode until I felt comfortable enough to begin building my own
              applications.
            </p>
            <h2> Current Employment</h2>
            <h3> Freelance Web Developer</h3>
            <p>
              Small business websites where most of my PHP experience comes
              from. You can find my lastest work at CoolBreezeTexas.com. Browse
              my Github repository for a behind the scenes look at my login and
              database logic.
            </p>
            <h3> GrubHub/Uber/DoorDash Driver</h3>
            <p>
              Driving deliveries. The flexible schedule allows me to dedicate
              6-10 hours a day studying or working on my projects.
            </p>
          </div>
        </div>
      </div>
     </div>
  );
}

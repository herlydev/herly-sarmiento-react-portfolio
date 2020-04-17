import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePicture from "../../../static/assets/images/bio/HerlySarmiento2020AAA.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="about-content-wrapper">
          <div className="about-header">SUMMARY</div>
          <div className="about-text">
            Business professional with education and working experience in
            Management, Customer Service, Operations, Marketing, and Software
            Development. Looking for opportunities to advance my business
            analysis and Front-end/Back-end development skills.
          </div>
          <div>
            I enjoy making new memories with my family. Some of my favorite
            hobbies are traveling around the world meeting people, searching for
            the best beach (I have a collection of about a dozen sand bottles),
            screaming at a soccer game, playing piano and mandolin by ear,
            dancing, cooking peruvian food, movies, and videogames.
          </div>
          <div className="about-header">SKILLS</div>
          <div className="about-text">
            <ul>
              <li>
                Technical Skills: React, HTML5, CSS, JavaScript, Python, Flask,
                SQL database, MongoDB, Git, UX, UML, Cypress.io, Excel, Word,
                Sabre.
              </li>
              <li>
                Soft Skills: Leadership, communication, integrity, strategy,
                planning, teamwork, training, innovative, problem-solving,
                decision-making, passion, building relationships, presentations,
                fully bilingual Spanish.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            className="text"
            href="https://www.linkedin.com/in/herlysarmiento/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="text"
            href="https://drive.google.com/file/d/18sJVZOGl-V80n706wJfhnT6zRAQfTOdi/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

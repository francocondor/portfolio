import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm a <span className="light-blue-text">backend developer</span> with a solid background and experience in web development.
            I specialize in creating robust and scalable web applications.
            If you'd like to learn more about my work, feel free to explore my portfolio or reach out to me directly.
            <br />
            <br />
            Besides coding, here are a few activities I enjoy in my free time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="icon" /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight className="icon" /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight className="icon" /> Playing sports
            </li>
          </ul>
          <p style={{ color: "rgba(126, 159, 226, 0.9)" }}>
            "In programming, the hard part isn't solving problems but deciding what problems to solve."{" "}
          </p>
          <footer className="blockquote-footer">Paul Graham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
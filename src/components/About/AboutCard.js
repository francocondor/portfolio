import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m a <span className="light-blue-text">backend developer</span> with a solid background and experience in web development.
            If you want to learn more about me and what I can do for you, you can take a look at my portfolio or
            send me a message.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul >
            <li className="about-activity">
              <ImPointRight className="icon" /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight className="icon" /> Language
            </li>
            <li className="about-activity">
              <ImPointRight className="icon" /> Travel
            </li>
          </ul>
          <p style={{ color: "rgba(126, 159, 226, 0.9)" }}>
            "In programming, the hard part isn't solving problems but deciding what problems to solve."{" "}
          </p>
          <footer className="blockquote-footer">Paul Graham1</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

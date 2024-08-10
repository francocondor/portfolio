import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="light-blue-text">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A personal chat room or workspace to share resources and hang out with friends. Built with React.js, Material-UI, and Firebase. Features include real-time messaging, image sharing, and message reactions."
              ghLink="https://github.com/francocondor/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Leaf"
              description="An eco-friendly project management tool designed to help teams collaborate efficiently while promoting sustainable practices. Built with Node.js, Express, and MongoDB."
              ghLink="https://github.com/francocondor/Leaf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection"
              description="A machine learning project that detects emotions from text input. Utilizes Python, TensorFlow, and Natural Language Processing (NLP) techniques."
              ghLink="https://github.com/francocondor/Emotion-Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Editor"
              description="A powerful code editor with syntax highlighting, auto-completion, and real-time collaboration features. Built with React.js and Firebase."
              ghLink="https://github.com/francocondor/Code-Editor"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Suicide Prevention"
              description="A web application aimed at suicide prevention by providing resources and support. Built with Django and React.js."
              ghLink="https://github.com/francocondor/Suicide-Prevention"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Bits of Code"
              description="A technical blog where I share my knowledge and experiences in software development. Built with Gatsby and Markdown."
              ghLink="https://github.com/francocondor/Bits-of-Code"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
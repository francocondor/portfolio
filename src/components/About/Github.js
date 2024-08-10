import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days | <strong className="light-blue-text">Code</strong>
      </h1>
      <GitHubCalendar
        summary_text="Actividad de GitHub"
        username="francocondor"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        responsive
        color="hsl(200, 50%, 50%)"
        global_stats={false}
        tooltips={true}
      />
    </Row>
  );
}

export default Github;

import React from "react";
import styled from "styled-components";
import { Project } from "../Project";
import { PROJECTS } from "../../const/projects";
import { Title } from "../Title";

export const Projects = () => {
  return (
    <div id="projects">
      <Title title="Proyectos" />
      <StyleContainerProjects>
        {PROJECTS.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </StyleContainerProjects>
    </div>
  );
};

const StyleContainerProjects = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

import React from "react";
import styled from "styled-components";

export const Project = ({ project }) => {
  return (
    <StyleContainerProject onClick={() => window.open(project.url)}>
      <StyledImg src={project.image} />

      <StyledContent>
        <StyleTitle>{project.title}</StyleTitle>
        <h6>{project.description}</h6>
      </StyledContent>
    </StyleContainerProject>
  );
};

const StyleTitle = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const StyleContainerProject = styled.div`
  width: 300px;
  height: 280px;
  border: 2px solid purple;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  opacity: 0.8;
`;

const StyledContent = styled.div`
  padding: 10px;
`;

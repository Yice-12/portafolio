import React from "react";
import styled from "styled-components";
import { Skill } from "../Skill";
import { SKILLS_LIST } from "../../const/skillsList";
import { Title } from "../Title";

export const Skills = () => {
  return (
    <div id="skills">
      <Title title="Habilidades" />
      <StyleFlex>
        {SKILLS_LIST.map((item, i) => (
          <Skill key={i} tecnology={item} />
        ))}
      </StyleFlex>
    </div>
  );
};

const StyleFlex = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

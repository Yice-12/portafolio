import React from "react";
import styled from "styled-components";
import vector from "../../assets/vector.png";

export const Start = () => {
  return (
    <StyledContainer id="start">
      <StyleImgs>
        <img src={vector} />
        <StyleImg src={vector} />
      </StyleImgs>

      <StyledStart>Transformando ideas en</StyledStart>
      <StyledStart>soluciones tecnológicas de</StyledStart>
      <StyledStart>impacto.</StyledStart>
      <StyledParagraph>
        <p>
          Soy desarrolladora web especializada en el stack MERN, apasionada por
          crear experiencias digitales eficientes y atractivas.
        </p>
        <p>
          Cada proyecto que realizo está diseñado para ofrecer una experiencia
          de usuario fluida y eficiente, optimizando tanto el front-end como el
          back-end.
        </p>
        <p>
          Mi misión es ayudar a empresas a alcanzar sus objetivos mediante la
          tecnología.
        </p>
      </StyledParagraph>
      <StyledbuttonContact
        onClick={() =>
          window.open(
            "https://wa.me/573232039668?text=Estoy%20interesado%20en%20tu%20perfil%20"
          )
        }
      >
        Contacto
      </StyledbuttonContact>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding-top: 108px;
  position: relative;
`;
const StyledStart = styled.h1`
  font-size: 38px;
  font-weight: bold;
`;
const StyledParagraph = styled.div`
  margin-top: 15px;
`;

const StyledbuttonContact = styled.button`
  margin-top: 30px;
  border: 1px solid purple;
  width: 110px;
  height: 30px;
  color: white;
  background-color: #892cdc;
  border-radius: 5px;
  cursor: pointer;
`;

const StyleImgs = styled.div`
  position: absolute;
  right: 100px;
  top: 80px;
  display: flex;
  gap: 80px;
`;
const StyleImg = styled.img`
  transform: rotateY(180deg);
`;

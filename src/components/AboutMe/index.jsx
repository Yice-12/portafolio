import React from "react";
import styled from "styled-components";
import photo from "../../assets/yicel.jpg";

export const AboutMe = () => {
  return (
    <StyledContainerAboutMe id="about-me">
      <StyledCard>
        <StyledPhoto src={photo} />
        <StyledContainer>
          <div>
            <spam> Sobre mi</spam>
            <h1>Yicela Gutierrez Guillen</h1>
            <h3>Desarrolladora Web - Front End</h3>
            <StyledDescription>
              Desarrolladora Frontend especializada en React, con 2 años de
              experiencia en la creación de aplicaciones web dinámicas y
              altamente funcionales. Mi enfoque está en implementar soluciones
              eficientes siguiendo las mejores prácticas de desarrollo,
              resolviendo desafíos complejos y colaborando de manera efectiva en
              equipos multidisciplinarios. Estoy apasionada por crear interfaces
              de usuario modernas, intuitivas y atractivas, siempre centradas en
              ofrecer una experiencia excepcional al usuario final.
            </StyledDescription>
          </div>
          <StyledDownloadCv>
            <a href="/CvYicel.pdf" download>
              <StyledDownloadCvButton>Descargar Cv</StyledDownloadCvButton>
            </a>
          </StyledDownloadCv>
        </StyledContainer>
      </StyledCard>
    </StyledContainerAboutMe>
  );
};

const StyledContainerAboutMe = styled.div`
  padding-top: 80px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const StyledCard = styled.div`
  width: 100%;
  flex-wrap: wrap;
  border: 2px solid purple;
  display: flex;
  padding: 50px;
  gap: 40px;
  border-radius: 6px;
`;

const StyledPhoto = styled.img`
  width: 320px;
  height: 294px;
  background-color: white;
  border-radius: 5px;
`;

const StyledDescription = styled.p`
  margin-top: 20px;
`;

const StyledDownloadCv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledDownloadCvButton = styled.button`
  font-size: 15px;
  color: white;
  font-weight: 500;
  padding: 7px 15px;
  background-color: #892cdc;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

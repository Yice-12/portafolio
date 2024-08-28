import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <h3>Portafolio Yicel Gutierrez</h3>
      <StyledList>
        <li>
          <a href="#start">Inicio</a>
        </li>
        <li>
          <a href="#about-me">Sobre Mi</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </StyledList>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  color: white;
  background-color: #892cdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 17px;
  a {
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

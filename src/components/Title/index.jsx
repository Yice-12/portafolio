import React from "react";
import styled from "styled-components";

export const Title = ({ title }) => {
  return <StyleTittle>{title}</StyleTittle>;
};

const StyleTittle = styled.h2`
  text-align: center;
  padding-top: 80px;
  margin-bottom: 20px;
`;

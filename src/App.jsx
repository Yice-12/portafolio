import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./const/themes";
import { GlobalStyle } from "./styles/globalStyle";
import { Navbar } from "./components/Navbar";
import { Start } from "./components/Start";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { MoonFilled, SunOutlined } from "@ant-design/icons";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Skills } from "./components/Skills";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToastContainer />
      <ParticlesBackground />
      <Navbar />
      <StyledContainer>
        <Start />
        <GlobalStyle />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </StyledContainer>
      <StyledIcon onClick={toggleTheme}>
        {isDarkMode ? <MoonFilled /> : <SunOutlined />}
      </StyledIcon>
    </ThemeProvider>
  );
}

const StyledContainer = styled.div`
  padding: 0px 30px;
`;

const StyledIcon = styled.div`
  font-size: 25px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  cursor: pointer;
`;

export default App;

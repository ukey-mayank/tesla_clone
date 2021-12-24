import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";
const App = () => {
  return <Position>
    <Header pos="absolute"/>
    <Home pos="absolute"/>
  </Position>;
};

export default App;

const Position = styled.div`
  position:relative;
`

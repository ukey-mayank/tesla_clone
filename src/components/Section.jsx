import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({ title, description, bg_img, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bgImg={bg_img}>
    <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      <ButtonGroup>
        <LeftButton>{leftBtnText}</LeftButton>
        {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
      </ButtonGroup>
      </Fade>
      <DownArrow src="/images/down-arrow.svg"/>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const ItemText = styled.div`
  position: absolute;
  top: 15vh;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 50%;
    transform: translateX(-40%);
    transition: linear;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 87vh;
  cursor: pointer;
  margin-right: 8px;
  @media(max-width:768px){
    margin-top:80vh;
  }
`;
const RightButton = styled(LeftButton)`
  margin-right: 0;
  background: #fff;
  opacity: 0.65;
  color: #000;
  @media (max-width: 768px) {
    margin-top: 1vh;
    margin-bottom:100px;
  }
`;
const DownArrow = styled.div`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  position:${({pos})=>pos};
  z-index:100;
`;

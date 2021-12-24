import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = ({pos}) => {
  return (
    <Container position={pos}>
      <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          bg_img="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          bg_img="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          bg_img="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          bg_img="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
      />
      <Section
          title="Lowest Cost Solar Panels in India"
          description="Money-back guarantee"
          bg_img="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
      />
      <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          bg_img="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
      />
      <Section
          title="Accessories"
          description=""
          bg_img="accessories.jpg"
          leftBtnText="Shop now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  position:${({position})=>position};
  z-index:1;
`;

import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import selectCars from "../features/car/carSlice";
// import { useSelector } from "react-redux";

const Header = ({ pos }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars);
  return (
    <Container position={pos}>
      <a href="https://www.google.com">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      {/* <Menu>
      {cars && cars.map((car, index)=>{
        return <a key={index} href"https://www.google.com">{car}</a>
      })} */}
      <Menu>
        <a href="https://www.google.com">Model S</a>
        <a href="https://www.google.com">Model 3</a>
        <a href="https://www.google.com">Model X</a>
        <a href="https://www.google.com">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="https://www.google.com">Shop</a>
        <a href="https://www.google.com">Tesla Account</a>
        <CustomMenu
          onClick={()=>{
            setBurgerStatus(true);
          }}>
      </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>{
            setBurgerStatus(false);
          }}/>
        </CloseWrapper>
        <li>
          <a href="https://www.google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="https://www.google.com">Used Inventory</a>
        </li>
        <li>
          <a href="https://www.google.com">Trade-in</a>
        </li>
        <li>
          <a href="https://www.google.com">Cybertruck</a>
        </li>
        <li>
          <a href="https://www.google.com">Roadster</a>
        </li>
        <li>
          <a href="https://www.google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="https://www.google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="https://www.google.com">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  line-height: 60px;
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  list-style: none;
  padding: 20px;
  transform:${({show})=> show ? 'translateX(0)' : 'translateX(100%)'};
  transition:transform .2s; 
  li {
    padding: 15px 0;
    border-botton: 1px solid rgba(0, 0, 0);
    a {
      font-weight: 600px;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`;

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`
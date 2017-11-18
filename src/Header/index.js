import React from "react";
import "../fonts/fonts.css";
import logo from "./logo.svg";
import shape from "../images/Shape.png";
import styled from "styled-components";
import { mediaMin, SectionBase } from "../styled";
import arrowDown from "../images/arrowDown.svg";
import { Link } from "react-router-dom";

const HeaderWrap = styled.header.attrs({
})`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  background-color: white;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 8px;
  font-weight: 400;
`;

const LogoLink = styled.div`
  display: flex;
  flex-direction: row;
  align-item: stretch;
`;

const Logo = styled.img`
  width: 30px;
  height: 32px;
  display: inline-block;
`;

const Input = styled.input.attrs({
  
})`
  background: url(${shape}) no-repeat 16px center;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 100%;
  height: 48px;
  font-family: inherit;
  ::placeholder {
    padding-left: 40px;
  }
`;

const LinkHeader = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: rgba(56, 56, 56, 1);
  padding: 0 8px;
`;

const Nav = styled.nav`
  display: none;
  ${mediaMin.lg`
    display: flex;
    margin-left: auto;
  `};
`;

const NavImg = styled.img.attrs({
  src: arrowDown,
  alt: "Navigation"
})`
  display: inline-block;
  padding-left: 8px;
  position: relative;
  top: -8px;
`;

export default () => {
  return (
    <HeaderWrap>
      <div className="container">
        <Header>
          <LogoLink>
            <Link to="/" >
              <Logo src={logo} alt="Airbnb logo" />
              <NavImg />
            </Link>
          </LogoLink>
            
          <div className="col-xs-10 col-md-7 col-xl-5">
            <Input type="text" placeholder="Try &quot;Miami&quot;" />
          </div>
          
          <Nav>
            <LinkHeader href="/become-a-host">Become a host</LinkHeader>
            <LinkHeader href="/help">Help</LinkHeader>
            <LinkHeader href="/sign-up">Sign Up</LinkHeader>
            <LinkHeader href="/log-in">Log In</LinkHeader>
          </Nav>
        </Header>
      </div>
    </HeaderWrap>
  );
};

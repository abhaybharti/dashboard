import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import sytled from "styled-components";

const NavbarContainer = sytled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarWrapper = sytled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = sytled.span`
    font-weight:bold;
    font-size: 30px;
    color: maroon;
    cursor: pointer;
`;

const TopLeft = sytled.div``;

const TopRight = sytled.div`
    display: flex,
    align-items: center;
`;

const IconContainer = sytled.div`
position: relative;
cursor: pointer;
margin-right: 10px;
color: #555;
`;

const IconBadge = sytled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-center: center;
    font-size: 10px;
`;

const Avatar = sytled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const Navbar = () => {
  const rndNmr = () => Math.floor(Math.random() * 90) + 1;
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <TopLeft>
          <Logo>Dashboard</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>5</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar
            src={`https://randomuser.me/api/portraits/women/${rndNmr()}.jpg`}
            alt="avatar"
          />
        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

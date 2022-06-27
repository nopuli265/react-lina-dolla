import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onclick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign up
          </SidebarLink>
        </SidebarMenu>

        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
  return(
    <div>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
          {/* <SidebarLink to='signup' onClick={toggle}>
            Sign Up
          </SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
    </div>
  )
}

export default Sidebar
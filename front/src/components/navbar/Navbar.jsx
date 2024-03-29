import React, {useState} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { FaBars } from 'react-icons/fa';


const Navbar = ({ toggle }) => {
  return (
    <div className=''>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Maya</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to='discover'>Options</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to='search'>Star Finder</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='faq'>FAQ</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='formHeading'>Get Started</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  )
}

export default Navbar
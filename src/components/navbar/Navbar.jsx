import React, {useState} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { FaBars } from 'react-icons/fa';


const Navbar = ({ toggle }) => {
  return (
    <div className=''>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Stars</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Options</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Star Finder</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Team</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Get Started</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  )
}

export default Navbar
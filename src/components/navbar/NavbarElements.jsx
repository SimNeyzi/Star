import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav `
  background: #031B34;
  height: 50px;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 10;
  // border: 2px solid red;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  z-index: 1;
  width: 100%;
  padding: 5px 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size:1.2rem;
  display:flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`

export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width:768px) {
    display:none;
  }
`

export const NavItem = styled.li`
  height: 60px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items:center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display:none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f45216;
  white-space: nowrap;
  padding: 5px 17px;
  color: #fff;
  font-size: 0.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #efac68;
    color: #fff;
  }
`
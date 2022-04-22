import styled from 'styled-components';
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#f45216' : '#f45216' )};
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({primary}) => (primary ? '#efac68' : '#efac68')};
  }
`
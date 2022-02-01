import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: black;
height: 80px;background;
/* margin-top:-80px; */
display: flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top: 0;
z-index:10;
@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

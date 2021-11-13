import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const NavbarWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  left: 0;
  font-size: 14px;
  margin: 0;
  padding: 0;

  @media(min-width: 1024px) {
    justify-content: space-around;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: end;
  list-style: none;
  width: max-content;
  align-items: center;
  margin: 0 2rem;

  div {
    align-items: center;
    display: flex;

    a {
        display: none;
        visibility: hidden;
        text-decoration: none;
        margin-left: 2rem;
    }

    @media(min-width: 768px) {
        a {
            display: flex;
            visibility: visible;
        }
    }
  }
`
export const NavLink = styled(Link)`
    text-decoration: none;
    color: rgb(20, 20, 20);
    height: 100%;
    align-items: center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow: hidden;
    display: ${props => props.display};

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: 0;
        background: #D6A449;
        height: 2.5px;
        -webkit-transition-property: right;
        transition-property: right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    &:hover:before {
        right: 0;
    }

    @media(min-width: 768px) {
        display: flex;
        margin: 0 1rem;
    }

    @media(min-width: 1024px) {
        margin: 0 2rem;
    }
`

export const Icon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;

  @media(min-width: 768px){
    display: none;
  }
`

NavLink.defaultProps = {
  display: "none",
  border: "4px solid #D6A449",
  margin: "auto 1.5rem"
}

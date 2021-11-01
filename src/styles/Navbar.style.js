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
  margin: ${props => props.margin};
  padding: 1rem 0;
  display: ${props => props.display};
  transition: 0.5s;

  &:hover {
      text-decoration: none;
    border-bottom: ${props => props.border};
    transform: scale(1.01);
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
  border: "2px solid #D6A449",
  margin: "auto 1.5rem"
}

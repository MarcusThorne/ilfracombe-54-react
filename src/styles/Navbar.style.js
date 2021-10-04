import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const NavbarWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`

export const Links = styled.div`
  display: flex;
  justify-content: end;
  list-style: none;
  width: max-content;
  align-items: center;
  margin: 0 2rem;

  div {
    display: flex;
    align-items: center;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(20, 20, 20);
  margin: ${props => props.margin};
  padding: 1rem 0;
  display: ${props => props.display};

  &:hover {
    border-bottom: ${props => props.border};
  }
`

export const Icon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
`

NavLink.defaultProps = {
  display: "none",
  border: "2px solid #D6A449",
  margin: "auto 1.5rem"
}

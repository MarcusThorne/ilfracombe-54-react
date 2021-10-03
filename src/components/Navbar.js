import { Nav } from '../styles/Navbar.style'
import { Links } from '../styles/Navbar.style'
import { Button } from '../styles/Button.style'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../components/Logo'

function Navbar() {
  return (
    <Nav>
      <Logo />

      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apartments">Apartments</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink border="none" to="/airbnb"><Button>AirBnb</Button></NavLink>
      </Links>
    </Nav>
  )
}

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(20, 20, 20);
  margin: auto;
  padding: 1rem 0;

  &:hover {
    border-bottom: ${(props) => props.border};
  }
`

NavLink.defaultProps = {
  border: "2px solid #D6A449",
}

export default Navbar

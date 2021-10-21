import { NavbarWrap, Links, NavLink, Icon } from '../styles/Navbar.style'
import { Button } from '../styles/Button.style'
import Logo from '../components/Logo'

function Navbar(props) {
  return (
    <NavbarWrap>
      <Logo />

      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apartments">Apartments</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <div>
          <NavLink border="none" to="/airbnb"><Button responsiveFontSize="16px">AirBnb</Button></NavLink>
          <Icon onClick={props.toggleSidebar} />
        </div>
      </Links>
    </NavbarWrap>
  )
}

export default Navbar

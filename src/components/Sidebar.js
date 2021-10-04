import { SidebarWrap, CloseSidebar } from '../styles/Sidebar.style'
import { Button } from '../styles/Button.style'
import { NavLink } from '../styles/Navbar.style'

function Sidebar(props) {
  const NavlinkStyles = {
    display:"flex",
    border:"none",
    margin:"1.5rem 0"
  }

  return (
    <SidebarWrap sidebar={props.sidebar} onClick={props.toggleSidebar} >
      <NavLink {...NavlinkStyles} to="/">Home</NavLink>
      <NavLink {...NavlinkStyles} to="/apartments">Apartments</NavLink>
      <NavLink {...NavlinkStyles} to="/activities">Activities</NavLink>
      <NavLink {...NavlinkStyles} to="/contact">Contact</NavLink>
      <NavLink {...NavlinkStyles} to="/airbnb"><Button>AirBnb</Button></NavLink>
      <CloseSidebar onClick={props.toggleSidebar} />
    </SidebarWrap>
  )
}

export default Sidebar

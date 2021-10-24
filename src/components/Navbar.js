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
                <NavLink to="/contact">Get In Touch</NavLink>
                <div>
                    <a border="none" href="https://www.airbnb.co.uk/users/show/180558917"><Button responsiveFontSize="14px">AirBnb</Button></a>
                    <Icon onClick={props.toggleSidebar} />
                </div>
            </Links>
        </NavbarWrap>
    )
}

export default Navbar

import { Icon } from '../styles/Logo.style'
import logo from '../img/logo.png'

function Logo() {
  return (
    <Icon>
      <img src={logo} alt="Logo" />
      <h1><span>.</span>54</h1>
    </Icon>
  )
}

export default Logo

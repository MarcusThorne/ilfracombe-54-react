import { Icon, LogoTitle, LogoImg } from '../styles/Logo.style'
import logo from '../img/logo.png'

function Logo() {
  return (
    <Icon>
      <LogoImg src={logo} alt="Logo" />
      <LogoTitle><span>.</span>54</LogoTitle>
    </Icon>
  )
}

export default Logo

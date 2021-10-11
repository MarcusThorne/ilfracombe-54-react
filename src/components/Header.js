import { HeaderWrap, HeaderContent, HeaderLinks } from '../styles/Header.style'
import { Button } from '../styles/Button.style'
import img from '../img/harbour.png'

function Header({height}) {
  return (
    <HeaderWrap image={img} height={height} >
      <HeaderContent >
        <h1>Ilfracombe <span>No. 54</span></h1>
        <p>Three Holiday Apartments</p>
        <HeaderLinks>
          <Button color="transparent" border="black 2px solid"
            textColor="rgb(20, 20, 20)" backgroundHoverColor="rgb(20, 20, 20)"
            textHoverColor="white" fontSize="14px">Book Now</Button>
          <p><i>or</i></p>
          <Button color="#d6a449" border="black 2px solid"
            textColor="white" backgroundHoverColor="#aa8038"
            fontSize="14px">Find Out More</Button>
        </HeaderLinks>
      </HeaderContent>
    </HeaderWrap>
  )
}

export default Header

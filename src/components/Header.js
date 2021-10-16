import { HeaderWrap, HeaderContent, HeaderLinks, Or, BackgroundImage } from '../styles/Header.style'
import { Button } from '../styles/Button.style'
import img from '../img/harbour.png'
import { useState, useEffect } from 'react'

function Header({height}) {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return() => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <HeaderWrap style={{ backgroundAttachment: `fixed` }}height={height} >
      <BackgroundImage src={img} alt="ilfracombe" bottom="0" transform={offsetY * 0.3 } />
      <HeaderContent >
        <h1>Ilfracombe <span>No. 54</span></h1>
        <p>Three Holiday Apartments</p>
        <HeaderLinks>
          <Button color="white" border="black 2px solid"
            textColor="rgb(20, 20, 20)" backgroundHoverColor="rgb(20, 20, 20)"
            textHoverColor="white" fontSize="14px">Book Now</Button>
          <Or><div></div><i>or</i><div></div></Or>
          <Button color="#d6a449" border="black 2px solid"
            textColor="white" backgroundHoverColor="#aa8038"
            fontSize="14px">Find Out More</Button>
        </HeaderLinks>
      </HeaderContent>
    </HeaderWrap>
  )
}

export default Header

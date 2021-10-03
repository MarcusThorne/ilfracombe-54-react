import React from 'react'
import { DisplayImage } from '../styles/Header.style'
import { HeaderContainer } from '../styles/Header.style'
import { HeaderContent } from '../styles/Header.style'
import { HeaderLinks } from '../styles/Header.style'
import harbour from '../img/harbour.png'
import { Button } from '../styles/Button.style'

function Header() {
  return (
    <HeaderContainer>
      <DisplayImage src={harbour} alt="" />

      <HeaderContent>
        <h1>Ilfracombe <span>No. 54</span></h1>
        <p>Three Holiday Apartments</p>
        <HeaderLinks>
          <Button color="transparent" border="black 2px solid"
            textColor="rgb(20, 20, 20)" backgroundHoverColor="rgb(20, 20, 20)"
            textHoverColor="white" fontSize="16px">Book Now</Button>
          <p><i>or</i></p>
          <Button color="transparent" border="black 2px solid"
            textColor="rgb(20, 20, 20)" backgroundHoverColor="#d6a449"
            textHoverColor="white" fontSize="16px">Find Out More</Button>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

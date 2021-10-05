import React from 'react'
import { Button } from '../styles/Button.style'
import { TestWrap } from '../styles/Testimonials.style'

function Testimonials() {
  return (
    <TestWrap>
      <h1>Testimonials</h1>
      <h3>Name</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed, blanditiis quis illum cumque veritatis nulla dolores ipsam distinctio aliquam assumenda harum sint facere consectetur iusto modi quas ratione expedita!</p>
      <div>
        <Button color="white" textColor="black" border="1px solid black">Previous</Button>
        <Button color="white" textColor="black" border="1px solid black">Next</Button>
      </div>
    </TestWrap>
  )
}

export default Testimonials

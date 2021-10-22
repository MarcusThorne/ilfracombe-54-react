import React from 'react'
import { TestWrap } from '../styles/Testimonials.style'
import Carousel from './Carousel'

function Testimonials() {
    return (
        <TestWrap>
            <h1>Testimonials</h1>
                <Carousel review={true} respond={false} slides={1} arrows={false} padding="0" apartmentsPage={true} />
            {/* <div>
                <Button color="white" textColor="black" border="1px solid black">Previous</Button>
                <Button color="white" textColor="black" border="1px solid black">Next</Button>
            </div> */}
        </TestWrap>
    )
}

export default Testimonials

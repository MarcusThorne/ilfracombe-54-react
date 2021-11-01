import styled from 'styled-components'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export const Image = styled.img`
    width: 50%;
    height: 20rem;
    object-fit: cover;
`

export const Rev = styled.div`
    width: 50%;
    height: max-content;
    display: flex;
    flex-direction: column;
    color: #131B23;

    h1 {
        font-size: 24px;
        margin-top: 2rem;
        margin-bottom: -0.5rem;
    }

    p {
        max-width: 1000px;
        margin: auto;
        position: relative;
        padding: 2rem;
    }
`

export const QuoteLeft = styled(ImQuotesLeft)`
    margin-right: 1rem;
    color: rgb(80,80,80)
`

export const QuoteRight = styled(ImQuotesRight)`
    margin-left: 1rem;
    color: rgb(80,80,80)
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin-left: 2rem;
    color: #131B23;

    h1 {
        font-weight: 400;
        font-size: 24px;
    }

    p {
        margin-top: -1rem;
        font-size: "14px";
        color: #D6A449;
    }

    div {
        display: flex;
    }

    @media(min-width: 768px){
        max-width: 60rem;
        margin: 2rem;
        margin-left: 14%;

        h1 {
            font-size: ${props => props.fontSize};
            margin-bottom: auto;
        }

        p {margin-top: 0;}
    }
`

const sharedIconStyle = `
    padding: 1rem;
    border-radius: 50%;
    background-color: rgb(255,255,255);
    position: absolute;
    z-index: 500;
    font-size: 20px;
    transition: 0.5s;
    color: black;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.6);

    &:hover {
        transform: scale(1.1);
        background-color: rgba(255,255,255);
        color: black;
        top: 42%;
    }

    visibility: hidden;

    @media(min-width: 480px) {
        visibility: visible;
    }
`

export const IconLeft = styled(BsChevronLeft)`
    ${sharedIconStyle};
    left: -30px;
`

export const IconRight = styled(BsChevronRight)`
    ${sharedIconStyle};
    right: -30px;
`

export const CarouselWrap = styled.div`
    width: ${props => props.width};
    margin: ${props => props.margin};
    /* overflow: hidden; */
    margin-top: ${props => props.marginTop};
    position: relative;
`

CarouselWrap.defaultProps = {
    width: "100%"
}

Title.defaultProps = {
    fontSize: "40px"
}

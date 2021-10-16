import styled from 'styled-components'
import { BsChevronLeft } from 'react-icons/bs'

export const Image = styled.img`
  width: 50%;
  height: 20rem;
  object-fit: cover;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  h1 {
    font-weight: 400;
    font-size: 24px;
  }

  div {
    display: flex;
  }

  @media(min-width: 768px){
    max-width: 60rem;
    margin: 2rem auto;

    h1 {
      font-size: 40px;
    }
  }
`

export const Icon = styled(BsChevronLeft)`
  border: 2px solid black;
  padding: 0.5rem 0.5rem;
  transform: ${props => props.rotate};
  margin: 0 0.2rem;
`

export const CarouselWrap = styled.div`
  width: ${props => props.width};
  margin: ${props => props.margin};
  overflow: hidden;
`

Icon.defaultProps = {
  rotate: "rotate(180deg)"
}

CarouselWrap.defaultProps = {
  width: "100%"
}

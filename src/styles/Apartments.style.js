import styled from 'styled-components'
import { ImCross } from 'react-icons/im'

export const CarouselTitle = styled.div`
  position: relative;
`

export const ApartmentTitle = styled.div`
  background-color: rgba(19, 27, 35, 0.9);
  color: white;
  font-weight: 400;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 18px;
  z-index: 50;
  font-size: 18px;

  p {
    margin-right: 2rem;
  }
`

export const ApartmentText = styled.p`
  /* box-shadow: 1px 1px 10px rgba(50,50,50,0.2); */
  border-radius: 10px;
  margin: 1rem auto;
  padding: 0.5rem;
  overflow: hidden;
  height: ${props => props.height};
  font-size: 12px;
  max-width: 40rem;

  div {
    background-color: rgb(235,235,235);
    padding: 1rem;
    margin-bottom: -1.5rem;
    margin-top: 1rem;

    span {
      font-weight: 600;
    }
  }

  p {
    margin: 0;
  }
`

export const HiddenInfo = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 500;
  align-items: center;
  justify-content: center;

  div {
    background-color: white;
    margin: 0 2rem;
    padding: 1rem;
    overflow: scroll;
    position: relative;
    height: max-content;
    max-height: 80vh;
  }
`

export const Cross = styled(ImCross)`
  position: absolute;
  right: 1rem;
  top: 1rem;
`

export const ApartmentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: -1rem;
  max-width: 40rem;
`

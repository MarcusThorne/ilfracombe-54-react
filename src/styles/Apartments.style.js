import styled from 'styled-components'
import { ImCross } from 'react-icons/im'

export const CarouselTitle = styled.div`
  position: relative;
`

export const ApartmentWrap = styled.div`
    margin: 2rem 1rem;
    max-width: 25rem;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 10px rgba(20,20,20,0.2);
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
        box-shadow: 1px 1px 40px rgba(20,20,20,0.4);
    }

    @media(min-width: 425px) {
        margin: 2rem auto;
    }

    @media(min-width: 768px) {
        width: auto;
    }

    @media(min-width: 980px) {
        margin: auto;
    }

    @media(min-width: 1440px) {
        width: 25rem;
    }
`

export const ApartmentsWrap = styled.div`
    margin: 13rem auto 5rem auto;

    @media(min-width: 980px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
        justify-content: center;
        width: max-content;
    }

    @media(min-width: 1440px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
  bottom: 30px;
  z-index: 50;
  font-size: 18px;

  p {
    margin-right: 2rem;
  }
`

export const ApartmentText = styled.p`
  border-radius: 10px;
  margin: 1rem auto;
  padding: 0.5rem;
  overflow: hidden;
  height: ${props => props.height};
  font-size: 12px;

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
    height: 5rem;
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
    z-index: 10000;
    align-items: center;
    justify-content: center;

    p {
        font-size: 14px;
    }

    div {
        background-color: white;
        margin: 0 2rem;
        padding: 1rem;
        position: relative;
        height: max-content;
        border-radius: 8px;
        box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
        max-width: 600px;
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
  width: 90%;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: -1rem;
`

export const ApartmentFloor = styled.h2`
    text-align: center;
    margin: auto 0;
    text-decoration: underline;
    color: "#131B23";

    @media(min-width: 980px) {
        margin-bottom: 2rem;
    }
`

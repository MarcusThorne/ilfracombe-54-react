import styled from 'styled-components'
import img from '../img/ilfracombe.png'

export const AboutWrap = styled.div`
  background-image: url(${img});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`

export const AboutTitle = styled.div`
  background-color: rgb(19, 27, 35);
  color: white;
  padding: 2rem;
  margin: 1rem;
  margin-bottom: -1rem;
  max-width: 34rem;

  h1 {
    font-weight: 400;
  }

  span {
    color: #D6A449
  }
`

export const AboutCards = styled.div`
  margin: 1rem;
  margin-bottom: 5rem;
  max-width: 30rem;

  @media(min-width: 570px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  div {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 20px;
  }
`

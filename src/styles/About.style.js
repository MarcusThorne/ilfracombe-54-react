import styled from 'styled-components'
import img from '../img/ilfracombe.png'

export const AboutWrap = styled.div`
  background-image: url(${img});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 35rem;

  @media(min-width: 768px) {
    background-size: cover;
    background-position: top;
  }
`

export const AboutText = styled.h1`
  background-color: rgba(255,255,255,0.8);
  width: 100%;
  max-width: 30rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-bottom: -1rem;
  text-align: center;
`

export const AboutTitle = styled.div`
  background-color: rgb(19, 27, 35);
  color: white;
  padding: 2rem;
  margin-bottom: 1rem;

  h1 {
    font-weight: 400;
    max-width: 34rem;
    margin: auto;
  }

  p {
    max-width: 34rem;
    margin: 1rem auto;
  }

  span {
    color: #D6A449
  }
`

export const AboutCards = styled.div`
  max-width: 30rem;
  width: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  margin-bottom: 60%;
  padding: 2rem 0;

  @media(min-width: 768px) {
    flex-direction: row;
    max-width: 40rem;
    align-items: stretch;
    background-color: rgba(255,255,255,0.8);
    border-radius: 4px;
    margin-bottom: 0;
    padding: 1rem 2rem
  }

  div {
    position: relative;
    overflow: hidden;
    text-align: center;
    transition: 0.2s;
    width: 100%;

    &:hover {
      transform: scale(1.05);
    }

    h4 {
      border-bottom: 1px solid rgba(0,0,0,0.1);
      width: 80%;
      margin: 1.5rem auto;

      @media(min-width: 768px) {
        border: none;
        margin: auto;
      }
    }

    svg {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  h1 {
    font-size: 20px;
    margin: 0;
  }
`

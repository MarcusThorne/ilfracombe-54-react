import styled from 'styled-components'

export const Video = styled.div`
  overflow: hidden;
  height: 20.8rem;
  background-color: black;
  position: relative;
  margin-top: 5rem;
  @media(min-width: 768px) {
    height: 28rem;
  }
  iframe {
    height: 40rem;
    width: 38rem;
    opacity: 0.7;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    @media(min-width: 620px) {
      width: 105%;
    }
    @media(min-width: 1100px) {
      height: 50rem;
    }
    @media(min-width: 1440px) {
        height: 80rem;
    }
  }
  h1 {
    color: white;
    position: absolute;
    z-index: 50;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 40%;
    text-align: center;
    padding: 1rem;
  }
`

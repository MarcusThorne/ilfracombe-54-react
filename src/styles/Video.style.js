import styled from 'styled-components'

export const Video = styled.div`
  overflow: hidden;
  height: 16.8rem;
  background-color: black;
  position: relative;

  iframe {
    height: 30rem;
    width: 30rem;
    opacity: 0.7;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  h1 {
    color: white;
    position: absolute;
    z-index: 50;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 40%;
    text-align: center;
  }
`

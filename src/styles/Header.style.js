import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
`

export const HeaderContent = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  width: max-content;
  padding: 2rem 7rem;

  h1 {
    font-size: 70px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
  }

  span {
    color: #d6a449;
  }

  p {
    font-size: 20px;
    margin: 0;
    margin-top: -18px;
  }
`

export const HeaderLinks = styled.p`
  display: flex;
  justify-content: right;
  padding-top: 2rem;

  p {
    margin: auto 20px;
  }
`

export const DisplayImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

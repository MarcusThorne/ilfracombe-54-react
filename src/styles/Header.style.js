import styled from 'styled-components'

export const HeaderWrap = styled.div`
  background-image: url(${props => props.image});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContent = styled.div`
  width: max-content;
  margin-bottom: 10rem;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
  }

  span {
    color: #d6a449;
    font-size: 25px;
  }

  p {
    font-size: 18px;
    margin: 0;
    margin-top: -10px;
  }
`

export const HeaderLinks = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;

  p {
    margin: auto 20px;
  }
`

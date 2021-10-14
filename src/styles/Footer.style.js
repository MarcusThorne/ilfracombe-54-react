import styled from 'styled-components'

export const FooterWrap = styled.div`
  text-align: center;
  padding-top: 2rem;

  h1 {
    font-size: 17px;
    font-weight: 600;
  }

  img {
    width: 5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  a {
    text-decoration: none;
    color: rgb(80, 80, 80)
  }
`

export const Copyright = styled.div`
  font-size: 12px;
  color: rgb(100, 100, 100);
  padding-top: 2rem;

  p {
    margin: 0;
  }
`

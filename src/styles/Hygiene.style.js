import styled from 'styled-components'

export const HygieneWrap = styled.div`
  background-color: #131B23;
  color: white;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 20px;
    margin-bottom: -0.5rem;
  }

  div {
    margin: 4rem 0;
    /* max-width: 10rem; */
  }

  p {
    font-size: 14px;
    max-width: 20rem;
    margin: 1rem auto;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid white;
  }

  @media(min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      /* width: 33%; */
      margin: 1rem 2rem;
    }
  }
`

import styled from 'styled-components'

export const TestWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(240, 240, 240);
  padding: 2rem;
  text-align: center;

  h1 {
    font-weight: 400;
    color: #D6A449;
  }

  p {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 16px;

    @media(min-width: 768px) {
      max-width: 50rem;
    }
  }

  div {
    display: flex;

    button {
      margin: 0.5rem;
    }
  }
`

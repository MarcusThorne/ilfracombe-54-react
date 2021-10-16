import styled from 'styled-components'

export const BackgroundImage = styled.img`
  position: absolute;
  object-fit: contain;
  object-position: center;
  width: 100%;
  z-index: -1;
  bottom: 0;

  @media(min-width: 426px) {
    transform: translateY(${ props => props.transform }px);
    top: ${props => props.top};
    bottom: ${props => props.bottom};
  }
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 34rem;
  position: relative;
  overflow: hidden;

  @media(min-width: 425px) {
    height: ${props => props.tabletHeight};
    min-height: 0;
  }

  @media(min-width: 1024px) {
    background-size: cover;
    background-position: top;
  }
`

export const Or = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    border-bottom: 1px solid rgba(0,0,0,0.8);
    width: 100%;
  }

  i {
    margin: 0 1rem;
  }
`

export const HeaderContent = styled.div`
  width: max-content;
  /* margin-bottom: 10rem; */
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 768px) {
    background-color: rgba(255,255,255,0.8);
    padding: 2rem 4rem;
    border-radius: 4px;
  }

  h1 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;

    @media(min-width: 425px) {
      font-size: 40px;
    }

    @media(min-width: 768px) {
      font-size: 45px;
    }
  }

  span {
    color: #d6a449;
    font-size: 25px;

    @media(min-width: 425px) {
      font-size: 30px;
    }

    @media(min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 18px;
    margin: 0;
    margin-top: -10px;

    @media(min-width: 768px) {
      font-size: 22px;
    }
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

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
        bottom: ${props => props.bottom};
    }

    @media(min-width: 1024px ) {
        top: ${props => props.laptopTop};
    }

    @media(min-width: 1440px) {
        top: ${props => props.desktopTop};
    }
`

export const ParallaxWrap = styled.div`
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
    min-height: 30rem;
  }

  @media(min-width: 1024px) {
    min-height: 40rem;
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

export const ParallaxContent = styled.div`
  width: max-content;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media(min-width: 768px) {
    background-color: rgba(255,255,255,0.8);
    padding: 2rem 4rem;
    border-radius: 4px;
  }

  h1 {
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 5rem;

    @media(min-width: 425px) {
      font-size: 36px;
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

export const ParallaxLinks = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;

  p {
    margin: auto 20px;
  }
`

export const ParallaxCards = styled.div`
  max-width: 30rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  margin-bottom: 55%;

  @media(min-width: 768px) {
    flex-direction: row;
    max-width: 40rem;
    align-items: center;
    border-radius: 4px;
    margin: auto;
    margin-bottom: 0;
    padding: 1rem 2rem;
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

    svg {
      font-size: 24px;
    }

    p {
      font-size: 14px;
      margin-top: 0.5rem;
    }
  }

  h1 {
    font-size: 20px;
    margin: 0 auto;
  }
`

BackgroundImage.defaultProps = {
    bottom: "0",
}

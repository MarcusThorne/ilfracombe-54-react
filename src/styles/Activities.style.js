import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const Next = styled(BsArrowRight)`
  color: white;
  font-size: 25px;
`

export const Info = styled(AiOutlineInfoCircle)`
  color: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export const ActivityWrap = styled.div`
  background-image: url(${props => props.image});
  width: 18rem;
  height: 18rem;
  background-position: center;
  background-repeat: none;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 10px rgba(0,0,0,1);
  color: white;
  margin: 1rem 0;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
  position: relative;
  border-radius: 10px;
  font-size: 30px;

  @media(min-width: 768px ) {
    margin: 1rem auto;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 1rem;
    padding: 0.5rem 1.5rem;
    background-color: rgba(0,0,0,0.7);
    border: none;
    font-size: 18px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
  }
`

export const ActivitiesWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width: 768px ) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
  }

  @media(min-width: 1024px ) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
  }

  @media(min-width: 1440px ) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-around;
  }
`

Next.defaultProps = {
  color: "white",
}

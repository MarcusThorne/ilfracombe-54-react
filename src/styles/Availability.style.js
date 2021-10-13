import styled from 'styled-components'
import { FaAirbnb } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

export const Next = styled(BsArrowRight)`
  color: black;
  font-size: 16px;
`

export const AvailabilityWrap = styled.div`
  /* border: 3px solid black; */
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 95%;
  /* max-width: 20rem; */
`

export const AvailabilityForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  margin-bottom: 0;
  padding-bottom: 1rem;
  border-radius: 4px;
  height: ${props => props.height};
  overflow: hidden;
  padding: 1rem;
  padding-bottom: 2rem;

  h2 {
    margin: auto 0;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid black;
  }
`
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  margin-top: 2rem;
  width: 100%;

  @media(min-width: 426px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`

export const CheckIn = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  justify-content: space-between;
`

export const Op = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.2rem;

  input {
    border: none;
    background-color: white;
    width: 100%;
    font-size: 10px;
  }
`

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;

  input, select {
    width: 100%;
    height: 3rem;
    border: 1px solid rgba(0,0,0,0.1);
    /* padding: 0 1rem; */
    background-color: white;
    border: none;
  }
`

export const Icon = styled(FaAirbnb)`
  color: #FF385C;
  font-size: 18px;
`

export const AvailabilityTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 16rem;
  margin: 0 auto;

  h2 {
    font-size: 22px;
  }
`

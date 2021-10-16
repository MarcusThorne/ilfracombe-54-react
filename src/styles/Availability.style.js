import styled from 'styled-components'
import { FaAirbnb } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

export const Next = styled(BsArrowRight)`
  color: black;
  font-size: 16px;
`

export const AvailabilityWrap = styled.div`
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 95%;
  margin-top: 2rem;

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    border: 3px solid black;
  }
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
  margin: 1rem auto;
  margin-top: 2rem;
  width: 100%;
  max-width: 100rem;

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const CheckIn = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`

export const Op = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.2rem;
  position: relative;

  input {
    border: none;
    background-color: white;
    width: 100%;
    font-size: 8px;

    @media(min-width: 375px) {
      font-size: 12px;
    }

    @media(min-width: 425px){
      font-size: 14px;
    }
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

  @media(min-width: 768px){
    h2 {
      font-size: 26px;
    }

    max-width: 18rem;
  }
`

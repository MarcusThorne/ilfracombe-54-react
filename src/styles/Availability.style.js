import styled from 'styled-components'
import { FaAirbnb } from 'react-icons/fa'

export const AvailabilityForm = styled.div`
  border: 3px solid rgb(20, 20, 20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

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
  margin: 3rem 0;
  width: 100%;

  @media(min-width: 425px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 16px;

  input, select {
    width: 100%;
    height: 3rem;
  }
`

export const Icon = styled(FaAirbnb)`
  color: #FF385C;
  font-size: 18px;
  margin: 0 1rem;
`

export const AvailabilityTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

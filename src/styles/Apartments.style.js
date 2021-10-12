import styled from 'styled-components'
import { ImCross } from 'react-icons/im'

export const ApartmentTitle = styled.h2`
  background-color: #131B23;
  color: white;
  font-weight: 400;
  padding: 0 1rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ApartmentText = styled.p`
  box-shadow: 1px 1px 10px rgba(50,50,50,0.2);
  border-radius: 10px;
  margin: 1rem;
  margin-top: -2rem;
  padding: 2rem;
  overflow: hidden;
  height: ${props => props.height};
`

export const HiddenInfo = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 500;
  align-items: center;
  justify-content: center;

  div {
    background-color: white;
    margin: 0 2rem;
    padding: 1rem;
    overflow: scroll;
    position: relative;
    height: max-content;
    max-height: 80vh;
  }
`

export const Cross = styled(ImCross)`
  position: absolute;
  right: 1rem;
  top: 1rem;
`

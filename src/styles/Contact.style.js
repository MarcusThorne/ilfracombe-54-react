import styled from "styled-components"

export const Heading = styled.div`
  background-color: rgba(240,240,240);
  padding: 4rem 2rem 4rem 2rem;
  margin-top: -8px;
`

export const ContactInfo = styled.div`
  padding: 4rem 2rem;
`

export const EmailForm = styled.form`
  background-color: rgba(240,240,240);
  padding: 4rem 2rem;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  input {
    height: 2rem;
  }

  textarea {
    height: 4rem;
  }

  @media(min-width: 768px) {
    width: 350px;
    margin: 1rem 2rem;
    background-color: white;
    border: 2px solid black;
  }
`

export const FormButton = styled.input`
  all: unset;
  background-color: #d9ab57;
  text-decoration: none;
  box-shadow: none;
  width: 5rem;
  margin-top: 2rem;
  text-align: center;
  color: white;
`

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s;
  object-fit: cover;

  &:hover {
    transform: scale(1.5);
  }
`

export const MapWrap = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;

  @media(min-width: 425px) {
    width: 95%;
    margin: auto;
    border-radius: 4px;
    margin-top: 6rem;
    margin-bottom: 1.3rem;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  }

  @media(min-width: 768px) {
    box-shadow: none;
    border-radius: none;
    margin: 0;
    width: auto;
    height: auto;
  }
`

export const TopSectionWrap = styled.div`
  @media(min-width: 768px) {
    display: flex;
    margin-top: 4rem;
    height: 100%;
  }
`

export const BottomSectionWrap = styled.div`
  @media(min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
`

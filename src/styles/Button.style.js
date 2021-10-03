import styled from 'styled-components'

export const Button = styled.button`
  padding: ${(props) => props.padding};
  position: center;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
  color: ${(props) => props.textColor};

  &:hover {
    background-color: ${(props) => props.backgroundHoverColor};
    color: ${(props) => props.textHoverColor};
  }
`

Button.defaultProps = {
  color: "#D6A449",
  textColor: "white",
  backgroundHoverColor: "#aa8038",
  border: "none",
  textHoverColor: "white",
  fontSize: "14px",
  padding: "1rem 2rem"
}

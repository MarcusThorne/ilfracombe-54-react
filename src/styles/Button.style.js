import styled from 'styled-components'

export const Button = styled.button`
  padding: ${(props) => props.padding};
  position: center;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
  color: ${(props) => props.textColor};
  cursor: pointer;
  width: ${props => props.width};
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  margin: ${props => props.margin};
  border-radius: ${props => props.borderRadius};
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.backgroundHoverColor};
    color: ${(props) => props.textHoverColor};
    transform: scale(1.02);
  }

  @media(min-width: 768px) {
    font-size: ${props => props.responsiveFontSize}
  }
`

Button.defaultProps = {
  color: "#D6A449",
  textColor: "white",
  backgroundHoverColor: "#aa8038",
  border: "none",
  textHoverColor: "white",
  fontSize: "14px",
  padding: "1rem 2rem",
  margin: "0",
  responsiveFontSize: "18px",
  width: "100%"
}

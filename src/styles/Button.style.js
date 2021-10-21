import styled from 'styled-components'

export const Button = styled.button`
  padding: ${(props) => props.padding};
  position: center;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
  color: ${(props) => props.textColor};
  cursor: pointer;
  width: 100%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  margin: ${props => props.margin};

  &:hover {
    background-color: ${(props) => props.backgroundHoverColor};
    color: ${(props) => props.textHoverColor};
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
  responsiveFontSize: "18px"
}

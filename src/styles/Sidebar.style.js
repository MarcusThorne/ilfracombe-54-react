import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'

export const SidebarWrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  background-color: white;
  transition: 0.3s ease-in-out;
  opacity: ${({ sidebar }) => (sidebar ? "100%" : "0")};
  top: ${({ sidebar }) => ( sidebar ? "0" : "-100%")};
`
export const CloseSidebar = styled(FaTimes)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 1.6rem;
  cursor: pointer;
`

SidebarWrap.defaultProps = {
  display: "flex",
}

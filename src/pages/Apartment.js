import { AboutTitle } from '../styles/About.style'
import { HeaderContent, HeaderWrap } from '../styles/Header.style'
import img from '../img/apartment.png'
import Availability from '../components/Availability'
import Apartments from '../components/Apartments'

function Apartment() {
  return (
    <div>
      <HeaderWrap image={img} height="70vh" >
        <HeaderContent>
          <h1 style={{ fontSize: "36px", fontWeight: "500" }}><span style={{ fontSize: "48px" }}>A</span>partments</h1>
        </HeaderContent>
      </HeaderWrap>
      <AboutTitle style={{ margin: "0" }}>
        <h1><span>Perfectly</span> combined comfort</h1>
        <p>We've turned this beautiful space into 3 spacious apartments. Each apartment can be rented seperately or together for larger groups. Get in touch if you'd like to talk about renting all 3!</p>
      </AboutTitle>
      <Availability color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" />
      <Apartments />
    </div>
  )
}

export default Apartment

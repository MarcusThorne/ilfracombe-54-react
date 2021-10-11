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
          <h1 style={{ fontSize: "30px" }}>A<span style={{ fontSize: "30px" }}>partments</span></h1>

        </HeaderContent>
      </HeaderWrap>
      <Availability />
      <AboutTitle>
        <h1><span>Perfectly</span> combined comfort</h1>
        <p>We've turned this beautiful space into 3 spacious apartments. Each apartment can be rented seperately or together for larger groups. Get in touch if you'd like to talk about renting all 3!</p>
      </AboutTitle>
      <Apartments />
    </div>
  )
}

export default Apartment

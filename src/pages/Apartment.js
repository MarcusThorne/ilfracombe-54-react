import { ParallaxWrap } from '../styles/Parallax.style'
import img from '../img/apartment.png'
import Availability from '../components/Availability'
import Apartments from '../components/Apartments'

function Apartment() {
  return (
    <div>
      <ParallaxWrap height="70vh" img={img} title={<><h1><span>A</span>partments</h1></>} ></ParallaxWrap>
      {/* <AboutTitle style={{ margin: "0" }}>
        <h1><span>Perfectly</span> combined comfort</h1>
        <p>We've turned this beautiful space into 3 spacious apartments. The rooms are fresh and spacious. A perfect location to explore the beautiful North Devon coast and countryside. Get in touch if you'd like to talk about renting all 3!</p>
      </AboutTitle> */}
      <Availability color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" />
      <Apartments />
    </div>
  )
}

export default Apartment

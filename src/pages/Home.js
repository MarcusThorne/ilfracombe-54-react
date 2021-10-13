import Header from '../components/Header'
import Availability from '../components/Availability'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Hygiene from '../components/Hygiene'
import { AboutTitle } from '../styles/About.style'

function Home() {
  return (
    <>
      <Header height="90vh" />
      <AboutTitle>
        <h1>ABOUT <span>US</span></h1>
        <p>We're passionate about Ilfracombe and the surrounding area. We love promoting the many thing happening in North Devon. Take a look at the activites page to find out more.</p>
      </AboutTitle>
      <Availability color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" iconColor="black" />
      <Carousel title="Apartments" margin="2rem 0" />
      <About />
      <Testimonials />
      <Hygiene />
    </>
  )
}

export default Home

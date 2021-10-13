import Header from '../components/Header'
import Availability from '../components/Availability'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Hygiene from '../components/Hygiene'

function Home() {
  return (
    <>
      <Header height="90vh" />
      <Availability color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)"/>
      <Carousel title="Apartments" margin="2rem 0" />
      <About />
      <Testimonials />
      <Hygiene />
    </>
  )
}

export default Home

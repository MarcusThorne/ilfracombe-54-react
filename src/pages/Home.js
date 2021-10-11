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
      <Availability />
      <Carousel />
      <About />
      <Testimonials />
      <Hygiene />
    </>
  )
}

export default Home

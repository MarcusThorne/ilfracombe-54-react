import Parallax from '../components/Parallax'
import Availability from '../components/Availability'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import Info from '../components/Info'
import Header from '../img/ilfracombeBuildings.png'
import About from '../img/ilfracombe.png'

function Home() {
  return (
    <>
      <Parallax height="100vh" tabletHeight="10vh" img={Header} home={true}
        title="Ilfracombe No. 54" subTitle="Three Holiday Apartments" desktopTop="10%" />
      <Info title="ABOUT US" subTitle="We're passionate about Ilfracombe and the surrounding area. We love promoting the many thing happening in North Devon. Take a look at the activites page to find out more." image={false}>
      </Info>
      <Availability color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" iconColor="black" />
      <Carousel title="Apartments" margin="0" subTitle="View Our Gallery!" />
      <Parallax height="100%" img={About} about={true} title="Accomplishments" bottom="22rem" laptopTop="-35%" speed={0.2} />
      <Testimonials />
      <Info image={true} />
    </>
  )
}

export default Home

import Parallax from '../components/Parallax'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import Info from '../components/Info'
import Header from '../img/ilfracombeBuildings.png'
import About from '../img/ilfracombe.png'
import { NavLink } from '../styles/Navbar.style'

function Home() {
    return (
        <>
        <Parallax height="100vh" tabletHeight="10vh" img={Header} home={true}
        title="Ilfracombe No. 54" subTitle="Three Holiday Apartments" desktopTop="-10%" />
            <Info title={<><span>A</span>BOUT US</>} subTitle={<>We're passionate about Ilfracombe and the surrounding area. We love promoting the many thing happening in North Devon. Take a look at the   <a href="/activities">activities</a> page to find out more."</>} availability={true} image={false} color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" iconColor="black" display="flex" flexDirection="column">
        </Info>
        <Carousel title="Apartments" margin="0" subTitle="View Our Gallery!" marginTop="10rem" />
        <Parallax height="100%" img={About} about={true} title="Accomplishments" bottom="10rem" laptopTop="-20%" speed={0.1} />
        <Testimonials />
            <Info image={true} display="grid" infoTitle={<><span>S</span>taying Safe</>} itemTitle="30px" responsiveItemTitle="32px" />
        </>
    )
}

export default Home

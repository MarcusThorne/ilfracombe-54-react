import Parallax from '../components/Parallax'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import Info from '../components/Info'
import Header from '../img/ilfracombeBuildings.png'
import About from '../img/ilfracombe.png'

function Home() {
    return (
        <div style={{width:"100%!important", overflow: "hidden"}}>
            <Parallax height="100vh" tabletHeight="10vh" img={Header} home={true}
            title={<>Ilfracombe <span>No. 54</span></>} subTitle="Three Holiday Apartments" desktopTop="-10%" />
            <Info title={<><span>A</span>BOUT US</>} subTitle={<>We're passionate about Ilfracombe and the surrounding area. We love promoting the many thing happening in North Devon. Take a look at the   <a href="/activities">activities</a> page to find out more."</>} availability={true} image={false} color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" iconColor="black" display="flex" flexDirection="column" />
            <Carousel title="Apartments" margin="0" subTitle="View Our Gallery!" marginTop="10rem" />
            <Parallax height="90vh" img={About} about={true} title="Accomplishments" bottom="10rem" laptopTop="-10%" speed={0.1} responsiveFontSize="40px" />
            <Testimonials />
            <Info largeTitle={true} image={true} display="grid" infoTitle={<><span>S</span>taying Safe</>} itemTitle="30px" responsiveItemTitle="32px" />
        </div>
    )
}

export default Home

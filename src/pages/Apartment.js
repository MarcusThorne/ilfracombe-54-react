import Parallax from '../components/Parallax'
import img from '../img/apartment.png'
import Availability from '../components/Availability'
import Apartments from '../components/Apartments'
import Info from '../components/Info'

function Apartment() {
    return (
        <div>
        <Parallax height="100vh" img={img} title="Apartments" laptopTop="20%" desktopTop="20%" responsiveWidth="80%" ></Parallax>
            <Info title={<><span>Perfectly</span> combined comfort</>} subTitle="We've turned this beautiful space into 3 spacious apartments. The rooms are fresh and spacious. A perfect location to explore the beautiful North Devon coast and countryside. Get in touch if you'd like to talk about renting all 3!" availability={true} image={false} color="rgb(19, 27, 35)" backgroundHoverColor="rgb(44, 50, 56)" iconColor="black" display="flex" flexDirection="column">
        </Info>
        <Apartments />
        </div>
    )
}

export default Apartment

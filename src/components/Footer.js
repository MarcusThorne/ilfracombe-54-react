import { FooterWrap, Copyright, Links, LinkSection } from '../styles/Footer.style'
import AirBnb from '../img/airbnb.png'
import { Link } from 'react-router-dom'
import { BiCopyright } from 'react-icons/bi'

function Footer() {
  return (
    <FooterWrap>
        <Links>
              <LinkSection >
                  <h2>Ilfracombe <span><br />No 54</span></h2>
                  <p style={{ fontSize: "12px" }}>Mobile - <a href="tel:07837 20143107837 201431" >07837 201431</a></p>
                  <p >Email - <span style={{ fontSize: "10px" }}>e-propertylettingsltd@outlook.com</span></p>
            </LinkSection>

            <LinkSection>
                <h1>Find Us On</h1>
                <img src={AirBnb} alt="AirBnb" />
            </LinkSection>

            <LinkSection>
                <h1>Pages</h1>
                <Link to="/">Home</Link>
                <Link to="/apartments">Apartments</Link>
                <Link to="/activities">Activities</Link>
                <Link to="/contact">Contact</Link>
            </LinkSection>

            <LinkSection>
                <h1>Activites</h1>
                <Link to="/">Shops</Link>
                <Link to="/apartments">Museums</Link>
                <Link to="/activities">Theatre & Cinema</Link>
                <Link to="/contact">Places To Visit</Link>
                <Link to="/contact">Kids Activities</Link>
            </LinkSection>

            <LinkSection>
                <h1>Book a Stay</h1>
                <Link to="/">Book Now</Link>
                <Link to="/apartments">Apartments</Link>
                <Link to="/contact">Activities</Link>
            </LinkSection>
        </Links>

        <Copyright>
            <p>Created By Marcus Thorne</p>
            <p><BiCopyright/>Copyright Ilfracombe .54</p>
        </Copyright>
    </FooterWrap>
  )
}

export default Footer

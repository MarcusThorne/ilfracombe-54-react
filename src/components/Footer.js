import { FooterWrap, Copyright, Links, LinkSection } from '../styles/Footer.style'
import AirBnb from '../img/airbnb.png'
import { Link } from 'react-router-dom'
import { BiCopyright } from 'react-icons/bi'

function Footer() {
  return (
    <FooterWrap>
      <h1>Find Us On</h1>
      <img src={AirBnb} alt="AirBnb" />

      <Links>
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

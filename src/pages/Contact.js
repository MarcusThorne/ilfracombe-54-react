import React from 'react'
import ContactForm from '../components/ContactForm'
import {Heading, ContactInfo, MapImg, MapWrap, TopSectionWrap, BottomSectionWrap} from '../styles/Contact.style'
import map from '../img/map.png'

function Contact() {
    return (
        <div>
            <TopSectionWrap>
                <MapWrap><MapImg src={map} alt="map" /></MapWrap>
                <Heading>
                    <h1>Need more infomation or want to get in touch?</h1>
                    <p>Questions or Comments? Please complete the form below. We'll follow up within 1-2 business days.</p>
                </Heading>
            </TopSectionWrap>
            <BottomSectionWrap>
                <ContactInfo>
                    <h4>Address</h4>
                    <p>54 Saint Brannock's Road <br />Ilfracombe <br />United Kingdom <br />EX34 8EQ </p>
                    <h4>Email</h4>
                    <p>e-propertylettingsltd@outlook.com </p>
                </ContactInfo>
                <ContactForm />
            </BottomSectionWrap>
        </div>
    )
}

export default Contact

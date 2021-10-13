import React from 'react'
import Carousel from './Carousel'
import { ApartmentText, ApartmentTitle, HiddenInfo, Cross, CarouselTitle } from '../styles/Apartments.style'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Button } from '../styles/Button.style'
import { useState } from 'react'

function Apartments() {
  const [ apartmentData, setApartmentData ] =  useState([
    {
      id: 1,
      title: "Apartment One",
      floor: "Ground Floor",
      description: "A newly decorated and refurbished ground floor apartment in a Victorian 'Gentleman's Residence'. The rooms are fresh and spacious. The kitchen has a dishwasher, fridge freezer, cooker and microwave. There is room for 4 guests or 6 (if willing to use the sofa bed in the lounge). A perfect location to explore the beautiful North Devon coast and countryside. There is a hardstanding at the front of the property, large enough to accommodate 4 cars, we ask guests to park mindfully of others.",
      space: "This apartment is the ground floor of an old Victorian property that has been divided into 3 apartments. They are connected by a beautiful shared staircase. The apartments can be booked together, giving guests the use of the whole house of holidaying with friends and family.",
      guestAccess: "There is a lawned garden at the rear of the property, this is a shared space with other guests, please ensure you clean up after your dog and close and secure the garden gate.",
      toggle: false
    }, {
      id: 2,
      title: "Apartment Two",
      floor: "Second Floor",
      description: "The apartment is the 1st floor apartment in a Victorian 'Gentleman's Residence'. The rooms are spacious with a kitchen, equipped with a fridge, cooker and microwave. There is room for 6 to sit around the table. There are 2 bedrooms, one with kingsize bed, the other is a twin room, which can be joined to make a super king, if requested in advance. There is also a sofa bed in the lounge. Well behaved dogs are welcome. There is a hardstanding at the front of the property large enough for 4 cars.",
      space: "This is a first floor apartment in an old Victorian building that has been divided into 3 apartments and refurbished to a high standard. The whole house is available for booking on air B and B.",
      guestAccess: "There is a lawned area to the rear of the property with garden seating. If you are travelling with your 4 legged friend please ensure you clean up after them, many thanks.",
      toggle: false
    }, {
      id: 3,
      title: "In The Attic",
      floor: "Top Floor",
      description: "'In the Attic' is a themed apartment in keeping with the Victorian property, it is located on the 3rd floor of the house and comprises lounge, kitchen, master bedroom, dressing room and bathroom. The apartment has been recently refurbished in a quirky style, with many design features to feast on. This is a perfect location for a getting away from it all and being able to get lost in your imagination.",
      space: "If you're looking for a stay away with a difference, this is the perfect place, full of quirky features and design elements to stimulate your imagination, the ideal place to escape from reality. There is free parking available at the property. We ask guests to park mindfully and in such a way that 4 cars are able to share the car park at the front of the house, if needed. There is additional free on road parking across the road.",
      guestAccess: "Guests will have exclusive use of the Victorian themed apartment. Fully equipped with kitchen bathroom, lounge, drawing room and king size bedroom.",
      toggle: false
    }
  ])

  const toggleInfo = (id) => {
    var index = apartmentData.findIndex(category => category.id === id);
    let category = apartmentData[index];
    category.toggle = !category.toggle

    setApartmentData([
      ...apartmentData.slice(0, index),
      category,
      ...apartmentData.slice(index + 1)
    ]);
  }

  return (
    <>
      {apartmentData.map(apartment =>
        <>
          <CarouselTitle>
            <Carousel title={apartment.title} floor={apartment.id} ></Carousel>
            <ApartmentTitle>
              <p>{apartment.floor}</p>
              <AiOutlineInfoCircle onClick={() => toggleInfo(apartment.id)} />
            </ApartmentTitle>
          </CarouselTitle>
          <ApartmentText >
            {apartment.description}
            <Button style={{marginTop: "2rem"}} >Book Now</Button>
          </ApartmentText>
          <div style={{borderBottom: "1px solid rgba(0,0,0,0.1)", margin: "2rem"}}></div>
          <HiddenInfo onClick={() => toggleInfo(apartment.id)} display={apartment.toggle ? "flex" : "none"} >
            <div>
              <Cross />
              <h4>Space</h4>
              <p>{apartment.space}</p>
              <h4>Guest Access</h4>
              <p>{apartment.guestAccess}</p>
            </div>
          </HiddenInfo>
        </>
      )}
    </>
  )
}

export default Apartments

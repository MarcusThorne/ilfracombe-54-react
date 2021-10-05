import React from 'react'
import { FaMedal } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { MdVerified, MdOutlineCleaningServices } from 'react-icons/md'
import img from '../img/ilfracombe.png'
import { AboutWrap, AboutTitle, AboutCards } from '../styles/About.style'

function About() {
  const cards = [
    {
      id: 1,
      title: "AirBnb Superhost",
      description: "Superhosts are highly rated and committed to providing great stays for guests."
    }, {
      id: 2,
      title: "90+ Reviews",
      description: "Check out our reviews on Airbnb"
    }, {
      id: 3,
      title: "Identity Verified",
      description: "We've verified our identity on Airbnb."
    }, {
      id: 4,
      title: "Enhanced Clean",
      description: "We've committed to Airbnb’s 5-step enhanced cleaning process. Learn more."
    }
  ]

  const findIcon = (card) => {
    if(card.id === 1){
      return(<FaMedal />)
    } else if(card.id === 2) {
      return (<AiFillStar />)
    } else if(card.id === 3) {
      return (<MdVerified />)
    } else {
      return(<MdOutlineCleaningServices />)
    }
  }

  return (
    <AboutWrap image={img} height="100%" >
      <AboutTitle>
        <h1>ABOUT <span>US</span></h1>
        <p>We're passionate about Ilfracombe and the surrounding area. We love promoting the many thing happening in North Devon. Take a look at the activites page to find out more.</p>
      </AboutTitle>

      <AboutCards>
        {cards.map(card =>
          <div>
            {findIcon(card)}
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        )}
      </AboutCards>
    </AboutWrap>
  )
}

export default About

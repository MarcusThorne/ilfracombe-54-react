import React from 'react'
import { FaMedal } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { MdVerified, MdOutlineCleaningServices } from 'react-icons/md'
import img from '../img/ilfracombe.png'
import { AboutWrap, AboutCards, AboutText } from '../styles/About.style'

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
      title: "Enhanced Clean",
      description: "We've committed to Airbnb’s 5-step enhanced cleaning process. Learn more."
    }
  ]

  const findIcon = (card) => {
    if(card.id === 1){
      return (<FaMedal style={{ color: "#FF385C"}} />)
    } else if(card.id === 2) {
      return (<AiFillStar style={{ color: "#F9C034" }} />)
    } else if(card.id === 3) {
      return (<MdVerified style={{ color: "dodgerblue" }} />)
    } else {
      return(<MdOutlineCleaningServices />)
    }
  }

  return (
    <AboutWrap image={img} height="100%" >
      <AboutText>Accomplishment</AboutText>
      <AboutCards>
        {cards.map(card =>
          <div>
            {findIcon(card)}
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            {card.id === 3 ? "" : <h4> </h4>}
          </div>
        )}
      </AboutCards>
    </AboutWrap>
  )
}

export default About

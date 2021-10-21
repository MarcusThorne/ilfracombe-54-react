import { useState, useEffect } from 'react'
import { ParallaxWrap, ParallaxContent, ParallaxCards, ParallaxLinks, Or, BackgroundImage } from '../styles/Parallax.style'
import { Button } from '../styles/Button.style'
import { FaMedal } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { MdVerified, MdOutlineCleaningServices } from 'react-icons/md'

function Parallax({height, img, title, subTitle, home, about, laptopTop, laptopBottom, speed=0.3, bottom, responsiveWidth, desktopTop}) {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return() => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    if (card.id === 1) {
      return (<FaMedal style={{ color: "#FF385C" }} />)
    } else if (card.id === 2) {
      return (<AiFillStar style={{ color: "#F9C034" }} />)
    } else if (card.id === 3) {
      return (<MdVerified style={{ color: "dodgerblue" }} />)
    } else {
      return (<MdOutlineCleaningServices />)
    }
  }

  return (
    <ParallaxWrap style={{ backgroundAttachment: `fixed` }}height={height} >
      <BackgroundImage src={img} alt="ilfracombe" bottom={bottom} laptopBottom={laptopBottom} desktopTop={desktopTop} laptopTop={laptopTop} transform={offsetY * speed } responsiveWidth={responsiveWidth} />
      <ParallaxContent >
        <h1>{title}</h1>
        <p>{subTitle}</p>

        { home &&
          <ParallaxLinks>
            <Button color="white" border="black 2px solid"
              textColor="rgb(20, 20, 20)" backgroundHoverColor="rgb(20, 20, 20)"
              textHoverColor="white" fontSize="14px">Book Now</Button>
            <Or><div></div><i>or</i><div></div></Or>
            <Button color="#d6a449" border="black 2px solid"
              textColor="white" backgroundHoverColor="#aa8038"
              fontSize="14px">Find Out More</Button>
          </ParallaxLinks>
        }

        { about &&
          <ParallaxCards>
            {cards.map(card =>
              <div>
                {findIcon(card)}
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                {card.id === 3 ? "" : <h4> </h4>}
              </div>
            )}
          </ParallaxCards>
        }
      </ParallaxContent>
    </ParallaxWrap>
  )
}

export default Parallax

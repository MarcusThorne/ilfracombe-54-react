import { InfoWrap, GridItem, InfoTitle } from "../styles/Info.style"
import hygieneImg from '../img/hygiene.jpg'
import cautionImg from '../img/caution.jpg'
import limitImg from '../img/limit.jpg'
import { Button } from "../styles/Button.style"
import Availability from "./Availability"

function Info({ infoTitle, title, subTitle, image, button, availability, color, backgroundColor, wrapBackgroundColor, iconColor, display, flexDirection, itemTitle, responsiveItemTitle, largeTitle=false}) {
    const Hygiene = [
    {
      title: "Precautions",
            description: "As you know, everywhere has been taking precautions to provide the highest standard of hygiene possible. We take these precautions very seriously to keep everyone safe.",
      img: hygieneImg
    }, {
      title: "Hygiene",
            description: "Hygiene is our priority at Ilfracombe number 54, we spend considerable amounts of time cleaning our apartments regularly. During this pandemic we've upped our game in the cleaning department, everything is wiped down and disinfected before every visit, so you can rest easy knowing that you're in a completely safe environment.",
      img: cautionImg
    }, {
      title: "Limitations",
            description: "The surrounding areas are starting to open up and limitations to North Devon are starting to ease, so your holiday will be filled with fun as normal. Countryside and seaside treks await you...",
      img: limitImg
    }
  ]


    return (
        <>
            <InfoTitle display={largeTitle ? "flex" : "none"}>{infoTitle}</InfoTitle>
            <InfoWrap display={display} flexDirection={flexDirection} wrapBackgroundColor={wrapBackgroundColor} >
                {image ?
                    <>
                        {Hygiene.map((h, index) =>
                            <GridItem key={index} itemTitle={itemTitle} responsiveItemTitle={responsiveItemTitle}>
                                <img src={h.img} alt={h.title} />
                                <h1>{h.title}</h1>
                                <p>{h.description}</p>
                            </GridItem>
                        )}
                    </>
                    :
                    <GridItem itemTitle={itemTitle} responsiveItemTitle={responsiveItemTitle}>
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                        {button &&
                            <Button margin="1rem 0">{button}</Button>
                        }
                    </GridItem>
                }
                {availability &&
                    <Availability color={color} backgroundColor={backgroundColor} iconColor={iconColor} />
                }
            </InfoWrap>
        </>
    )
}

export default Info

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
      description: "As you know, everywhere has been taking there procautions to provide the heighest standard of hygiene possible. We take this precautions very seriously to keep everyone safe. So bare in mind that if we believe our apartments to be a threat all bookings will be canceled until further notice.",
      img: hygieneImg
    }, {
      title: "Hygiene",
      description: "Hygiene is extremely important to us at ilfracombe no 54, which is why we spent considerable amounts of time cleaning our apartments regularly. During this pandemic we've really upped our game in the cleaning department, everything is wiped down and dis-infected before every visit, so you can rest easy knowing that you're in a completely safe enviroment.",
      img: cautionImg
    }, {
      title: "Limitations",
      description: "The rule of six still applys to our apartments, we ask you not to exceed this number. The surrounding areas are starting to open up and limitations to ilfracombe are starting to ease, so your holiday will be filled with fun as normal.",
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

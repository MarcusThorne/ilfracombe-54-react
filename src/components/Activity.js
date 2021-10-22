import { ActivityWrap, ActivitiesWrap, ActivityLocation, Next, Link } from '../styles/Activities.style'
import Advert from '../components/AdvertData'
import { useState } from 'react'
import { Button } from '../styles/Button.style'

function Activity({name, image}) {
    const [show, setShow] = useState(8)
    const [ads, setAds] = useState(Advert)

    const incrementShow = () => {
        setShow(
            show + 8
        )
    }

    const categories = []

    Advert.map(a =>
        categories.includes(a.category) ? "" : categories.push(a.category)
    )

    const filter = (value) => {
        console.log(value)
        value === "All" ? setAds(() => Advert) : setAds(() => Advert.filter(ad => ad.category === value))
        setShow(12)
    }

    var count = ads.length
    var Ads = (ads.slice(0, show))

    return(
        <>
            <div style={{display: "flex", width: "70%", margin: "0 auto", flexWrap: "wrap", marginBottom: "2rem"}}>
                <Button color="lightgray" textColor="white" width="max-content" borderRadius="4px" margin="0.2rem" padding="0.4rem" fontSize="18px" responsiveFontSize="22px"
                    onClick={(event) => filter(event.target.textContent)}>All</Button>
                {categories.map(category =>
                    <Button color="lightgray" textColor="white" width="max-content" borderRadius="4px" margin="0.2rem" padding="0.4rem" fontSize="18px" responsiveFontSize="22px"
                    onClick={() => filter(category)}>{category}</Button>
                )}
            </div>

            <ActivitiesWrap style={{ marginBottom: "4rem" }}>
                {Ads.map(ad =>
                    <Link href={ad.link} >
                        <ActivityWrap image={ad.image} key={ad.name} >
                            <p>{ad.name}</p>
                            <ActivityLocation>{ad.location}</ActivityLocation>
                            <Next />
                        </ActivityWrap>
                    </Link>
                )}
            </ActivitiesWrap>

            { show < count &&
                <div style={{width: "max-content", margin: "2rem auto"}}>
                    <Button color="white" textColor="black" width="max-content" borderRadius="4px" margin="2rem auto" onClick={ () => incrementShow()}>Show More</Button>
                </div>
            }
        </>
    )
}

export default Activity

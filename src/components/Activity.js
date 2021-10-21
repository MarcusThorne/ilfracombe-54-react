import { ActivityWrap, ActivitiesWrap, ActivityLocation, Next, Info } from '../styles/Activities.style'
import Adverts from '../components/AdvertData'
import { useState } from 'react'
import { Button } from '../styles/Button.style'

function Activity({name, image}) {
    const [show, setShow] = useState(12)
    const [ads, setAds] = useState(Adverts)

    const incrementShow = () => {
        setShow(
            show + 12
        )
    }

    const categories = []

    Adverts.map(a =>
        categories.includes(a.category) ? "" : categories.push(a.category)
    )

    const filter = (value) => {
        console.log(value)
        value === "All" ? setAds(() => Adverts) : setAds(() => Adverts.filter(ad => ad.category === value))
        setShow(12)
    }

    var Ads = (ads.slice(0, show))

    return(
        <>
            <div style={{display: "flex", width: "80%", margin: "0 auto", flexWrap: "wrap"}}>
                <Button color="lightgray" textColor="white" width="max-content" borderRadius="4px" margin="2rem 0.2rem" padding="0.4rem" fontSize="8px"
                    onClick={(event) => filter(event.target.textContent)}>All</Button>
                {categories.map(category =>
                    <Button color="lightgray" textColor="white" width="max-content" borderRadius="4px" margin="2rem 0.2rem" padding="0.4rem" fontSize="8px"
                    onClick={(event) => filter(category)}>{category}</Button>
                )}
            </div>
            <ActivitiesWrap>
                {Ads.map(ad =>
                    <ActivityWrap image={ad.image}>
                        <p>{ad.name}</p>
                        <ActivityLocation>{ad.location}</ActivityLocation>
                        <button><Next /></button>
                        <Info />
                    </ActivityWrap>
                )}
            </ActivitiesWrap>
            <div style={{width: "max-content", margin: "2rem auto"}}>
                <Button color="white" textColor="black" width="max-content" borderRadius="4px" margin="2rem auto" onClick={ () => incrementShow()}>Show More</Button>
            </div>
        </>
    )
}

export default Activity

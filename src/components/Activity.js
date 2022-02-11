import { ActivityWrap, ActivitiesWrap, ActivityLocation, Next, Link } from '../styles/Activities.style'
import Advert from '../components/AdvertData'
import { useState } from 'react'
import { Button } from '../styles/Button.style'

function Activity() {
    // amount of adverts being shown at one time
    const [show, setShow] = useState(12)
    // The current adverst being shown
    const [ads, setAds] = useState(Advert)

    // increments the amount of adverts being shown when a button is click
    const incrementShow = () => {
        setShow(
            show + 12
        )
    }

    // getting all the categories available within the adverts
    const categories = []
    Advert.map(a =>
        categories.includes(a.category) ? "" : categories.push(a.category)
    )

    // method to select only the adverts that match the text content of a button selected
    const filter = (value) => {
        value === "All" ? setAds(() => Advert) : setAds(() => Advert.filter(ad => ad.category === value))
        setShow(12)
    }

    // counting how many adverts are current showing so i can track when to remove show more button
    // and making sure the to only show how many ads are set in useState
    var count = ads.length
    var Ads = (ads.slice(0, show))

    return(
        <>
            <div style={{display: "flex", width: "70%", margin: "0 auto", flexWrap: "wrap", marginBottom: "2rem"}}>
                <Button color="lightgray" textColor="white" width="max-content" borderRadius="4px" margin="0.2rem" padding="0.4rem" fontSize="18px" responsiveFontSize="22px"
                    // on click using filter method to set 'all' category to show all advertisments
                    onClick={(event) => filter(event.target.textContent)}>All</Button>
                {categories.map((category, index) =>
                    <Button key={index} color="lightgray" textColor="white" width="max-content" borderRadius="4px" margin="0.2rem" padding="0.4rem" fontSize="18px" responsiveFontSize="22px"
                        // on click changing the adverts shown to only the adverts that match the text content of the button
                        onClick={() => filter(category)}>{category}</Button>
                )}
            </div>

            <ActivitiesWrap style={{ marginBottom: "4rem" }}>
                {Ads.map((ad, index) =>
                    <Link href={ad.link} key={index} >
                        <ActivityWrap image={ad.image} key={ad.name} >
                            <p>{ad.name}</p>
                            <ActivityLocation>{ad.location}</ActivityLocation>
                            <Next />
                        </ActivityWrap>
                    </Link>
                )}
            </ActivitiesWrap>

            {/* button to increment adverts shown */}
            { show < count &&
                <div style={{width: "max-content", margin: "2rem auto"}}>
                    <Button color="white" textColor="black" width="max-content" borderRadius="4px" margin="2rem auto" onClick={ () => incrementShow()}>Show More</Button>
                </div>
            }
        </>
    )
}

export default Activity

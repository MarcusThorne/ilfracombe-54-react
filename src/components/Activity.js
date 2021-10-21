import { ActivityWrap, ActivitiesWrap, Next, Info } from '../styles/Activities.style'
import Adverts from '../components/AdvertData'
import { useState } from 'react'
import { Button } from '../styles/Button.style'

function Activity({name, image}) {
    const [show, setShow] = useState(12)
    var Ads = Adverts.slice(0, show)

    const incrementShow = () => {
        setShow(
            show + 12
        )
    }

    return(
        <>
            <ActivitiesWrap>
                {Ads.map(ad =>
                    <ActivityWrap image={ad.image}>
                        <p>{ad.name}</p>
                        <button><Next /></button>
                        <Info />
                    </ActivityWrap>
                )}
            </ActivitiesWrap>
            <div style={{width: "max-content", margin: "2rem auto"}}>
                <Button color="white" textColor="black" width="max-content" margin="2rem auto" onClick={ () => incrementShow()}>Show More</Button>
            </div>
        </>
    )
}

export default Activity

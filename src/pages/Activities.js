import React from 'react'
import { Video } from '../styles/Video.style'
import { AboutTitle } from '../styles/About.style'
import YoutubeVideo from '../components/Youtube'
import { Button } from '../styles/Button.style'
import Adverts from '../components/AdvertData'
import Activity from '../components/Activity'
import { ActivitiesWrap } from '../styles/Activities.style'

function Activities() {
  return (
    <>
      <Video>
        <YoutubeVideo videoId={"XHxU46jdFFc"} />
        <h1 style={{backgroundColor: "rgba(0, 0, 0,0.5)", borderRadius: "6px", fontWeight: "500"}}><span style={{ color: "#D6A449"}}>THINGS</span> TO DO</h1>
      </Video>
      <AboutTitle style={{margin: "0", marginBottom: "1rem"}}>
        <h1><span>About</span> Ilfracombe</h1>
        <p>Ilfracombe is packed with wonderful scenic trails, beaches and sea life. It has a lot to offer, take a walk along to seaside cliffs or a boat trip around the coast. There is also a lot to do in surrounding areas... croyde and woolacombe have great beaches and many pubs with great food. And for a great fish and chips visit Braunton.</p>
        <Button margin="1rem 0">See What's On</Button>
      </AboutTitle>
      <ActivitiesWrap>
        {Adverts.map(ad => {
          return(<Activity name={ad.name} image={ad.image} ></Activity>)
        })}
      </ActivitiesWrap>
    </>
    )
}

export default Activities

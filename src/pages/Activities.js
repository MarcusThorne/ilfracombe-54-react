import React from 'react'
import { Video } from '../styles/Video.style'
import { AboutTitle } from '../styles/About.style'
import YoutubeVideo from '../components/Youtube'

function Activities() {
  return (
    <>
      <Video>
        <YoutubeVideo videoId={"XHxU46jdFFc"} />
        <h1 style={{backgroundColor: "rgba(0, 0, 0,0.5)", borderRadius: "6px"}}><span style={{ color: "#D6A449"}}>THINGS</span> TO DO</h1>
      </Video>
      <AboutTitle>
        <h1><span>H</span>ello</h1>
        <p>Ilfracombe is packed with wonderful scenic trails, beaches and sea life. Ilfracombe has a lot to offer, take a walk along to seaside cliffs or a boat trip around the coast. There is also a lot to do in surrounding areas, croyde and woolacombe have great beaches and many pubs with great food. And for a great fish and chips visit Braunton.</p>
      </AboutTitle>
    </>
    )
}

export default Activities

import React from 'react'
import { Video } from '../styles/Video.style'
import YoutubeVideo from '../components/Youtube'
import Activity from '../components/Activity'
import Info from '../components/Info'

function Activities() {
    return (
        <>
            <Video>
                <YoutubeVideo videoId={"XHxU46jdFFc"} />
                <h1 style={{ backgroundColor: "rgba(0, 0, 0,0.5)", borderRadius: "6px", fontWeight: "500" }}><span style={{ color: "#D6A449" }}>THINGS</span> TO DO</h1>
            </Video>
            <Info title="About Ilfracombe" subTitle="Ilfracombe is packed with wonderful scenic trails, beaches and sea life. It has a lot to offer, take a walk along to seaside cliffs or a boat trip around the coast. There is also a lot to do in surrounding areas... croyde and woolacombe have great beaches and many pubs with great food. And for a great fish and chips visit Braunton." button="See What's Happing" ></Info>
            <h2 style={{textAlign:"center"}}>Take A Look</h2>
            <Activity />
        </>
    )
}

export default Activities

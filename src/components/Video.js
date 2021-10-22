import React from 'react'
import { VideoWrap, VideoContent, IconContent, Icon } from '../styles/Video.style'
import YoutubeVideo from '../components/Youtube'
import pub from '../img/pub.png'
import entertainment from '../img/entertainment.png'
import walk from '../img/walk.png'

function Video() {
    return (
        <VideoWrap>
            <YoutubeVideo videoId={"XHxU46jdFFc"} />
            <VideoContent>
                <h1><span>About</span> Ilfracombe</h1>
                <h5>Ilfracombe is packed with wonderful scenic trails, beaches and sea life. It has a lot to offer, take a walk along to seaside cliffs or a boat trip around the coast. There is also a lot to do in surrounding areas... croyde and woolacombe have great beaches and many pubs with great food. And for a great fish and chips visit Braunton.</h5>

                <IconContent>
                    <Icon border="1px solid rgba(255,255,255,0.1)">
                        <img src={pub} alt="" />
                        <p>Have a drink or dine out!</p>
                    </Icon>
                    <Icon border="1px solid rgba(255,255,255,0.1)">
                        <img src={entertainment} alt="" />
                        <p>Watch a movie or explore the arcades!</p>
                    </Icon>
                    <Icon>
                        <img src={walk} alt="" />
                        <p>Take a stroll around our beautiful beaches!</p>
                    </Icon>
                </IconContent>
            </VideoContent>
        </VideoWrap>
    )
}

export default Video

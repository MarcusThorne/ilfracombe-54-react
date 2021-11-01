import React from 'react'
import Activity from '../components/Activity'
import Video from '../components/Video'

function Activities() {
    return (
        <>
            <Video />
            <h1 style={{ margin: "4rem auto", color: "#131B23", borderBottom: "1px solid #131B23", width: "max-content"}}>Take A Look</h1>
            <Activity />
        </>
    )
}

export default Activities

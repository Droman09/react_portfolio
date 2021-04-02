import React from "react"
import { Parallax } from 'react-parallax';

const ParallaxImage = (props) => {
    return(
        <>
    <Parallax bgImage= {props.scr} bgImageAlt="profile pic" strength={200} >
        <div style={{height: 350}}>
        </div>
    </Parallax>
    </>
    )
}

export default ParallaxImage
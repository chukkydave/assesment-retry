import React from 'react'
import { Moments } from '../../styled-components/styled'
import img from "../../img/icon-awesome-images@1x.png"
import vid from "../../img/icon-awesome-video@1x.png"
import tag from "../../img/icon-ionic-ios-pricetag@1x.png"
import location from "../../img/icon-material-location-on@1x.png"

function Main() {
    return (
        <Moments>
            <div className='inputBtn'>
                <input className='input' placeholder='Share your moments' />
                <button className='btn'>Post</button>
            </div>
            <div className='mediaType'>
                <div className='media'>
                    <img alt='' className='mediaIcon' src={img} />
                    <p className='mediaText'>Image</p>
                </div>
                <div className='media'>
                    <img alt='' className='mediaIcon' src={vid} />
                    <p className='mediaText'>Video</p>
                </div>
                <div className='media'>
                    <img alt='' className='mediaIcon' src={location} />
                    <p className='mediaText'>Location</p>
                </div>
                <div className='media'>
                    <img alt='' className='mediaIcon' src={tag} />
                    <p className='mediaText'>Tags</p>
                </div>
            </div>
        </Moments>
    )
}

export default Main
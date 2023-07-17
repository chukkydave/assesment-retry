import React from 'react'
import { Feeds } from '../../styled-components/styled'
import rss from "../../img/rss-feed-24px@1x.png"

function Main() {
    return (
        <Feeds>
            <div className='sidebarItem'>
                <img className='sidebarIcon' src={rss} alt="" />
                <div className='sidebarText'>Feeds</div>
            </div>
            <div className='sidebarItem'>
                <img className='sidebarIcon' src={rss} alt="" />
                <div className='sidebarText'>Feeds</div>
            </div>
            <div className='sidebarItem'>
                <img className='sidebarIcon' src={rss} alt="" />
                <div className='sidebarText'>Feeds</div>
            </div>
            <div className='sidebarItem'>
                <img className='sidebarIcon' src={rss} alt="" />
                <div className='sidebarText'>Feeds</div>
            </div>
            <div className='sidebarItem'>
                <img className='sidebarIcon' src={rss} alt="" />
                <div className='sidebarText'>Feeds</div>
            </div>

        </Feeds>
    )
}

export default Main
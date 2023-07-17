import React from 'react'
import { TopBar } from '../../styled-components/styled'
import dp from "../../img/ellipse-4@1x.png"
import iconDown from "../../img/icon-ionic-ios-arrow-back@1x.png"
import usa from "../../img/image-1@1x.png"
import messageIcon from "../../img/path-106@1x.png"
import bellIcon from "../../img/path-193@1x.png"
import searchIcon from "../../img/path-99-1@1x.png"
import logo from "../../img/mSmall5.png"

function Main() {
    return (
        <TopBar>
            <div className='left'>
                <div><img className="dp" src={dp} alt="" /></div>
                <div><img src={iconDown} className='icon' alt="" /> <span className='name'>Jonathan Deo</span></div>
            </div>
            <div className='right'>
                <img className='usa mr-2' src={usa} alt="usa flag" />

                <div className='message mr-2 icon-container'>
                    <img className='img' src={messageIcon} alt="message icon" />
                    <span className="badge">5</span>
                </div>
                <div className='mr-2 icon-container'>
                    <img src={bellIcon} className='img' alt="bell icon" />
                    <span className="badge">5</span>

                </div>
                <div className="mr-2 search-container">
                    <input type="text" className="search-input" placeholder="Search" />
                    <img className="search-icon" alt="search icon" src={searchIcon} />
                </div>

                <div>
                    <img alt="" src={logo} />

                </div>
            </div>
        </TopBar>
    )
}

export default Main
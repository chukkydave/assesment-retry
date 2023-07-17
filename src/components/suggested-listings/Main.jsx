import React from 'react'
import { SuggestedListing, Heading } from '../../styled-components/styled'
import pImage from "../../img/ellipse-32-1@1x.png"

function Main() {
    return (
        <div>
            <Heading> <div className="nav-item">Suggested Listings</div>
            </Heading>
            <SuggestedListing>
                <div className="list">
                    <div>
                        <div className="list-item">
                            <img className="profile-image" src={pImage} alt="" />
                            <div className="profile-info">
                                <h3 className="profile-name">Smoothie</h3>
                                <span className="location">Smoothy store</span>

                            </div>
                            <button className="button">Order</button>
                        </div>
                        <div className="orders" style={{ position: "relative", left: '4em', bottom: '1.5em', }}>
                            <span className="orders-left">25 orders left</span>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="list-item">
                            <img className="profile-image" src={pImage} alt="" />
                            <div className="profile-info">
                                <h3 className="profile-name">Smoothie</h3>
                                <span className="location">Smoothy store</span>

                            </div>
                            <button className="button">Order</button>
                        </div>
                        <div className="orders" style={{ position: "relative", left: '4em', bottom: '1.5em', }}>
                            <span className="orders-left">25 orders left</span>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="list-item">
                            <img className="profile-image" src={pImage} alt="" />
                            <div className="profile-info">
                                <h3 className="profile-name">Smoothie</h3>
                                <span className="location">Smoothy store</span>

                            </div>
                            <button className="button">Order</button>
                        </div>
                        <div className="orders" style={{ position: "relative", left: '4em', bottom: '1.5em', }}>
                            <span className="orders-left">25 orders left</span>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="list-item">
                            <img className="profile-image" src={pImage} alt="" />
                            <div className="profile-info">
                                <h3 className="profile-name">Smoothie</h3>
                                <span className="location">Smoothy store</span>

                            </div>
                            <button className="button">Order</button>
                        </div>
                        <div className="orders" style={{ position: "relative", left: '4em', bottom: '1.5em', }}>
                            <span className="orders-left">25 orders left</span>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </SuggestedListing>
        </div>

    )
}

export default Main
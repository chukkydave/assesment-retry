import React from 'react'
import { SuggestedPages, NavbarMini } from '../../styled-components/styled'
import imge from "../../img/ellipse-32-1@1x.png";
import ico from "../../img/icon-feather-bookmark-2@1x.png"

function Main() {
    return (
        <div>
            <NavbarMini>
                <div className="nav-item">Suggested Users</div>
                <div className="nav-item active">Suggested Pages</div>
            </NavbarMini>
            <SuggestedPages>
                <div className="list">
                    <div className="list-item">
                        <img className="profile-image" src={imge} alt="" />
                        <div className="profile-info">
                            <h3 className="profile-name">Rose Kooto</h3>
                            <span className="location">Abuja</span>
                        </div>
                        <button className="button">Support</button>
                        <img className="icon" src={ico} alt="Icon down" />
                    </div>
                    <div className="list-item">
                        <img className="profile-image" src={imge} alt="" />
                        <div className="profile-info">
                            <h3 className="profile-name">Rose Kooto</h3>
                            <span className="location">Abuja</span>
                        </div>
                        <button className="button">Support</button>
                        <img className="icon" src={ico} alt="Icon down" />
                    </div>
                    <div className="list-item">
                        <img className="profile-image" src={imge} alt="" />
                        <div className="profile-info">
                            <h3 className="profile-name">Rose Kooto</h3>
                            <span className="location">Abuja</span>
                        </div>
                        <button className="button">Support</button>
                        <img className="icon" src={ico} alt="Icon down" />
                    </div>
                    <div className="list-item">
                        <img className="profile-image" src={imge} alt="" />
                        <div className="profile-info">
                            <h3 className="profile-name">Rose Kooto</h3>
                            <span className="location">Abuja</span>
                        </div>
                        <button className="button">Support</button>
                        <img className="icon" src={ico} alt="Icon down" />
                    </div>
                    <div className="list-item">
                        <img className="profile-image" src={imge} alt="" />
                        <div className="profile-info">
                            <h3 className="profile-name">Rose Kooto</h3>
                            <span className="location">Abuja</span>
                        </div>
                        <button className="button">Support</button>
                        <img className="icon" src={ico} alt="Icon down" />
                    </div>
                    <div className="list-item">
                        <img className="profile-image" src={imge} alt="" />
                        <div className="profile-info">
                            <h3 className="profile-name">Rose Kooto</h3>
                            <span className="location">Abuja</span>
                        </div>
                        <button className="button">Support</button>
                        <img className="icon" src={ico} alt="Icon down" />
                    </div>
                </div>
            </SuggestedPages>
        </div>

    )
}

export default Main
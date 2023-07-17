import React from 'react'
import { User, Navbar } from '../../styled-components/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import FloatingCard from "../floating-menu/Main"
import disImage from "../../img/ellipse-32-1@1x.png"

function Main() {
    return (
        <div>
            <Navbar>
                <div className="nav-item">Community</div>
                <div className="nav-item">See what's happening</div>
                <div className="nav-item active">My Page</div>
            </Navbar>
            <User>
                <FontAwesomeIcon className='menu' icon={faEllipsis} />
                <div className='floating-card'>
                    <FloatingCard />
                </div>

                <div className='profileImage'>
                    <img alt="profile image" src={disImage} />
                </div>
                <div className='profileInfo'>
                    <h2 className='profileName'>
                        Rose Kooto
                    </h2>
                    <h3 className='profileUsername'> User Name</h3>
                    <p className='profileDesc'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                </div>
                <div>
                    <div className='profileStats'>
                        <div className='profileStat'>
                            <h4 className='profileStatValue'>105</h4>
                            <p className='profileStateLabel'>Post</p>
                        </div>
                        <div className='profileStat'>
                            <h4 className='profileStatValue'>7,080</h4>
                            <p className='profileStateLabel'>Followers</p>
                        </div>
                        <div className='profileStat'>
                            <h4 className='profileStatValue'>1,500</h4>
                            <p className='profileStateLabel'>Following</p>
                        </div>
                        <div className='profileStat'>
                            <h4 className='profileStatValue'>1,500</h4>
                            <p className='profileStateLabel'>Supporting</p>
                        </div>

                    </div>
                    <button className='profileActionButton'>
                        Following
                    </button>
                    <div>
                        <h5 className='hOther'>Other Pages</h5>
                        <p className='otherPages'>Business One</p>
                        <p className='otherPages'>Business One longer Name</p>
                        <p className='otherPages'>Business One</p>
                        <p className='otherPages'>Business One</p>
                        <p className='otherPages'>Business One</p>
                    </div>
                </div>

            </User>
        </div>
    )
}

export default Main
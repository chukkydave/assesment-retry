import React from 'react'
import { MyPages } from '../../styled-components/styled';
import searchIcon from "../../img/path-99-1@1x.png"
import imgee from "../../img/ellipse-95-1@1x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faThumbTack, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import FloatingCard from "../floating-menu/Main"


function Main() {
    return (
        <MyPages>
            <div className='first'>
                <span className='h3'>My Pages</span>
                <div className='new'>
                    {/* <img alt="" src={plus} /> */}
                    <FontAwesomeIcon className='' color="#FBB03B" icon={faCirclePlus} />
                    <p>Create</p>
                </div>
            </div>
            <div className="mr-2 search-container">
                <input type="text" className="search-input" placeholder="Search" />
                <img className="search-icon" alt="search icon" src={searchIcon} />
            </div>
            <div className="list">
                <div className="list-item">
                    <img className="profile-image" src={imgee} alt="" />
                    <div className="profile-info">
                        <h3 className="profile-name">Business Name</h3>
                        <span className="location">Private Page</span>
                    </div>
                    <div style={{ display: "inline-grid" }}>
                        <FontAwesomeIcon className='menu' icon={faEllipsis} />
                        <FontAwesomeIcon className='menu' icon={faThumbTack} />
                    </div>
                    <div className='floating-card'>
                        <FloatingCard />
                    </div>
                </div>
                <div className="list-item">
                    <img className="profile-image" src={imgee} alt="" />
                    <div className="profile-info">
                        <h3 className="profile-name">Business Name</h3>
                        <span className="location">Private Page</span>
                    </div>
                    <div style={{ display: "inline-grid" }}>
                        <FontAwesomeIcon className='menu' icon={faEllipsis} />
                        <FontAwesomeIcon className='menu' icon={faThumbTack} />
                    </div>
                </div>
                <div className="list-item">
                    <img className="profile-image" src={imgee} alt="" />
                    <div className="profile-info">
                        <h3 className="profile-name">Business Name</h3>
                        <span className="location">Private Page</span>
                    </div>
                    <div style={{ display: "inline-grid" }}>
                        <FontAwesomeIcon className='menu' icon={faEllipsis} />
                        <FontAwesomeIcon className='menu' icon={faThumbTack} />
                    </div>
                </div>
                <div className="list-item">
                    <img className="profile-image" src={imgee} alt="" />
                    <div className="profile-info">
                        <h3 className="profile-name">Business Name</h3>
                        <span className="location">Private Page</span>
                    </div>
                    <div style={{ display: "inline-grid" }}>
                        <FontAwesomeIcon className='menu' icon={faEllipsis} />
                        <FontAwesomeIcon className='menu' icon={faThumbTack} />
                    </div>
                </div>
            </div>
        </MyPages>
    )
}

export default Main
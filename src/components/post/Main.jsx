import React from 'react'
import { Post } from '../../styled-components/styled'
import friendslaughing from "../../img/highres-488961989-1@1x.png"
import imge from "../../img/ellipse-32-1@1x.png";
import love from "../../img/icon-awesome-heart-1@1x.png"
import comment from "../../img/icon-feather-message-circle-1@1x.png"
import save from "../../img/icon-feather-bookmark-2@1x.png";
import share from "../../img/icon-ionic-md-share-alt-1@1x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import FloatingCard from "../floating-menu/Main"





function Main() {
    return (
        <Post>
            <FontAwesomeIcon className='menu' icon={faEllipsis} />
            <div className='floating-card'>
                <FloatingCard />
            </div>
            <img
                src={friendslaughing}
                alt="friends laughing"
                className='imgn'
            />
            <div className='postArea'>
                <div className='profile'>
                    <img alt="" className='pImage' src={imge} />
                    <div><h3 className='name'>Rose Kooto</h3>
                        <div className='flex-all'><p className='pnames'>Abuja</p><p className='pnames'>11hr Ago</p><p className='pnames'>200 likes</p></div>
                    </div>
                </div>
                <div className='content'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <div className='reply'>
                    <h5 style={{ padding: "20px 10px" }}>View all comments</h5>
                    <div className="gridreply">
                        <img alt="" className='pImageReply' src={imge} />
                        <div>
                            <h4>Rose Kooto</h4>
                            <p className='lastSeen'>Last seen 1hr ago</p>
                            <p className='pTextReply'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                    </div>

                </div>
                <div className='like'>
                    <div className='flexLike'>
                        <img alt="" src={love} />
                        <img alt="" src={comment} />
                        <img alt="" src={save} />
                    </div>
                    <img alt="" src={share} style={{ height: "18px", width: "22px", marginTop: "25px", }} />
                </div>
            </div>
        </Post>
    )
}

export default Main
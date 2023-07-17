import styled from 'styled-components';

export const TopBar = styled.div`
    width: 1848px;
    height: 263px;
    background: transparent linear-gradient(267deg, #A303A0 0%, #490057 100%) 0% 0% no-repeat padding-box;
    border-radius: 0px 0px 35px 35px;
    display:grid;
    grid-template-columns: 1fr 1fr;

    .left{
        display:flex;
        align-items: center;
        margin-left:130px;
    }
    .right{
        display:flex;
        align-items: center;
        justify-content:center;
    }
    .dp{
        width: 82px;
        height: 82px;
    }
    .icon{
        width: 15px;
        height: 8px;
        margin-left: 10px;
    }
    .name{
        width: 122px;
        height: 27px;
        text-align: left;
        letter-spacing: 0px;
        color: #FFFFFF;
    }
    .usa{
        width: 43px;
        height: 23px;
    }
    .img{
        width: 35px;
        height: 31px;
    }
    .logo{
       
    }
    .icon-container{
        position:relative;
        display:inline-block;
    }
    .badge{
        position:absolute;
        top:-20%;
        left:20px;
        height: 27px;
        width:27px;
        background-color: #FBB03B;
        color:white;
        text-align: center;
        border-radius: 50%;
        
    }
    .mr-2{
        margin-right: 40px;
    }
    .search-input {
        width: 398px;
        height: 72px;
        background: #490057;
        border-radius: 16px;
        border:none;
    }

    .search-container {
    position: relative;
    display: inline-block;
    }

    .search-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #999; /* Adjust the color of the icon */
    pointer-events: none;
    width:31px;
    height: 31px;
    }

    .search-input::placeholder {
    padding-left: 60px; 
    font-size: 25px;
    text-align: left;
    letter-spacing: 0px;
    color: #FFFFFF;
    }

`

export const Container = styled.div`
    padding: 80px 69px 176px 140px;
    display: grid;
    grid-template-columns: 260px 927px 329px;
    grid-gap: 67px;
`
export const Column1 = styled.div`
    display: grid;
    grid-template-rows: 113px 368px 450px;
    grid-gap: 20px;
`
export const Column2 = styled.div`
    display: grid;
    grid-template-rows: 335px 180px 450px 450px;
    grid-gap: 36px;
`
export const Column3 = styled.div`
    display: grid;
    grid-template-rows: 500px 439px;
    grid-gap: 72px;
`
export const SwitchAccount = styled.div`
      
    background-color: #fff;
    border-radius: 16px;
    display: grid;
    align-items: center;

    .title{
        display: grid;
        width: 135px;
        height: 27px;
        text-align: left;
        font-size: 16px;
        letter-spacing: 0;
        color: #490057;
        opacity: 1;
        margin: auto;
        justify-content: center;
    }

    .buttonO {
        background: #490057;
        box-shadow: 24px 22px 93px #00000029;
        border-radius: 7px 0px 0px 7px;
        color: #FFF;
        font-size: 15px;
        height: 42px;
        width: 115px;
        border: none;
    }

    .buttonT {
        background: #B8B8B8;
        box-shadow: 24px 22px 93px #00000029;
        border-radius: 0px 7px 7px 0px;
        color: #FFF;
        font-size: 15px;
        height: 42px;
        width: 115px;
        border: none;
    }
`

export const Feeds = styled.div`
        
    background-color: #490057;
    border-radius: 16px;
    display: grid;
    align-items: center;

    .sidebarItem{
        display: grid;
        gap: 17px;
        grid-template-columns: 29px 1fr;
        margin-left: 40px;
    }

    .sidebarIcon{
        width: 29px;
        height: 29px;
    }

    .sidebarText{
        color: #FFF;
        letter-spacing: 0;
        line-height: 27px;
        font: 20px;
        opacity: 1
    }

`
export const MyPages = styled.div`
        
        margin-top: 89px;
        background-color: #fff;
        border-radius: 16px;
        display: grid;
        align-content: center;
        grid-template-rows: auto auto auto;
        gap: 20px;
        justify-items: center;
        padding 30px 10px;

        .h3{
            font-size: 20px;
            text-align: left;
            letter-spacing: 0px;
            color: #490057;
        }
        .first{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: center;
            align-content: space-evenly;
        }

        .new{
            width: 83px;
            height: 24px;
            background: #490057;
            border-radius: 12px;
            display: flex;
            justify-content: space-evenly;
        }
        .new p{
            width: 49px;
            height: 14px;
            text-align: left;
            font: normal normal medium 10px/19px Work Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
        }

        .search-input {
            width: 219px;
            height: 25px;
            background: #D5D5D5;
            border-radius: 16px;
            border:none;
        }

        .search-container {
        position: relative;
        display: inline-block;
        }

        .search-icon {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        color: #999; /* Adjust the color of the icon */
        pointer-events: none;
        width:11px;
        height: 11px;
        }

        .search-input::placeholder {
        padding-left: 60px; 
        font-size: 15px;
            width: 58px;
        height: 14px;
        text-align: left;
        font: normal normal medium 10px/8px Work Sans;
        letter-spacing: 0px;
        color: #787878;
        }

        .list {
            display: grid;
            justify-content: space-evenly;
            position: relative;
        }

        .floating-card{
            position: absolute;
            top: 20px;
            right: -100px;
            color:grey;
        }

        .list-item {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-template-rows: auto auto;
            gap: 15px;
            align-items: center;
        }

        .profile-image {
            width: 50px;
            height: 50px;
        }

        .profile-info {
            display: grid;
            align-items: center;
        }

        .profile-name {
            margin: 0;
        }

        .location {
            font-size: 12px;
            color: #999;
        }

        .button {
            color: #fff;
            top: 1077px;
            left: 1646px;
            width: 78px;
            height: 27px;
            background: #490057 0% 0% no-repeat padding-box;
            border-radius: 13px;
            border: none;
            cursor: pointer;
        }

        .icon {
            width: 20px;
            height: 20px;
        }
`
export const User = styled.div`
        
    background-color: #9400B11C;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 70px 309px auto;
    position: relative;
    align-content:center;
    padding: 20px 0px 20px 0px;
    justify-content: space-evenly;
    .menu{
        position: absolute;
        top: 5px;
        right: 15px;
        color:grey;
    }
    .floating-card{
        position: absolute;
        top: 20px;
        right: -100px;
        color:grey;
    }

    .profileImage{
        height: 125px;
        width: 125px;
        border-radius: 50%;
    }
    .profileInfo{
        display:grid;
    }
    .profileName{
        font-size: 40px;
        color: #490057;
        font-size: 52px;
        font-weight: 400;
        margin: 0;
    }
    .profileUsername{
        font-size: 18px;
        font-weight:normal;
        color: #787878;
        margin-bottom: 20px;
    }
    .profileDesc{
        font-size: 15px;
        letter-spacing: 0;
        color: #787878;
        opacity: 1;
    }
    .profileStats{
        display: grid;
        gap: 27px;
        grid-template-columns: auto auto auto auto;
        margin-bottom: 12px;
    }
    
    .profileStatValue{
        line-height: 24px;
        font-size: 20px;
        letter-spacing: 0;
        color: #490057;
        opacity: 1;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .profileStateLabel{
        line-height: 12px;
        font-size: 16px;
        letter-spacing: 0;
        color: #787878;
        opacity: 1;
    }
    .profileActionButton{
        width: 119px;
        height: 29px;
        background: #490057;
        border-radius: 15px;
        opacity: 1;
        color: #fff;
        line-height: 12px;
        border: none;
    }

    .hOther{
        color: #490057;
        font-size:16px;
        line-height: 20px;
        margin: 10px 0;
    }
    .otherPages{
        color: #490057;
        font-size:16px;
        font-weight: 300;
        line-height: 20px;
    }
`
export const Navbar = styled.div`

        width: 927px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid grey;
        margin-bottom: 24.48px;

    .nav-item {
        padding: 10px 20px;
        border-bottom: 2px solid transparent;
        cursor: pointer;

        top: 923px;
        left: 1456px;
        font-size: 20px;
        text-align: left;
        font: normal normal 300 15px/20px Work Sans;
        letter-spacing: 0px;
        color: #9B9B9B;
        opacity: 1;
    }

    .nav-item.active {
        border-bottom: 4px solid #333;
        color: #490057;
    }
`
export const NavbarMini = styled.div`

        width: 320px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid grey;
        margin-bottom: 24.48px;

    .nav-item {
        padding: 10px 20px;
        border-bottom: 2px solid transparent;
        cursor: pointer;

        top: 923px;
        left: 1456px;
        font-size: 20px;
        text-align: left;
        font: normal normal 300 15px/20px Work Sans;
        letter-spacing: 0px;
        color: #9B9B9B;
        opacity: 1;
    }

    .nav-item.active {
        border-bottom: 4px solid #333;
        color: #490057;
    }
`

export const Moments = styled.div`
    background-color: #fff;
    border-radius: 16px;
    display: grid;
    align-content: space-between;
    padding: 37px 31px 23px 34px;

    .inputBtn {
        display: grid;
        grid-template-columns: auto 123px;
        gap: 40px;
        color: #490057;
    }

    .input{
        border: 1px solid #70707078;
        border-radius: 29px;
        height: 52px;
        padding: 14px 32px;
    }
    .btn{
        background: #490057 0% 0% no-repeat padding-box;
        color: #FFF;
        font-size: 20px;
        line-height: 27px;
        border-radius: 26px;
        border: none;
    }
    .mediaType{
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: 411px;
    }
    .media{
        display: flex;
    }
    .mediaIcon{
        width: 25px; 
        height: 19px;
    }
    .mediaText{
        color: #393939;
        letter-spacing: 0;
        line-height: 27px;
        font: 20px;
        margin-left: 10px;
    }
`

export const SuggestedListing = styled.div`
    background-color: #E8D8EC;
    border-radius: 16px;
    display: grid;
    justify-content: space-around;

    .list {
            
            margin-top: 5px;
        }

        .list-item {
            display: grid;
            grid-template-columns: auto 1fr auto auto auto;
            align-items: start;
            margin: 15.57px 0px;
        }

        .profile-image {
            width: 50px;
            height: 50px;
        }

        .profile-info {
            display: grid;
            justify-items: stretch;
            margin: 0px 60.5px 0px 13px;
        }

        .profile-name {
            margin: 0;
        }

        .location {
            font-size: 12px;
            color: #999;
            grid-column: span 2;
        }

        .orders {
            grid-column: span 2;
            align-items: center;
        }

        .button {
            padding: 5px 10px;
            color: #fff;
            top: 1077px;
            left: 1646px;
            width: 78px;
            height: 27px;
            background: #490057 0% 0% no-repeat padding-box;
            border-radius: 13px;
            border: none;
            margin-right: 20px;
            cursor: pointer;
        }

        .icon {
            width: 20px;
            height: 20px;
        }

        .progress-bar {
            height: 8px;
            width: 205px;
            background-color: #9B9B9B3B;
        }

        .progress-fill {
            height: 100%;
            background-color: #FBB03B;
            width: 50%;
        }

        .orders-left {
            font-size: 12px;
            color: #999;
        }
`
export const Heading = styled.div`
   width: 320px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid grey;
        margin-bottom: 24.48px;

    .nav-item {
        padding: 10px 20px;
        border-bottom: 2px solid transparent;
        cursor: pointer;

        top: 923px;
        left: 1456px;
        font-size: 20px;
        text-align: left;
        font: normal normal 300 15px/20px Work Sans;
        letter-spacing: 0px;
        color: #490057;
        opacity: 1;
    }

    .nav-item.active {
        border-bottom: 4px solid #333;
        color: #490057;
    }
`


export const SuggestedPages = styled.div`
    background-color: #E8D8EC;
    border-radius: 16px;
    display: grid;
    align-content: center;
    padding: 20px 10px;

    .list {
            display: grid;
            justify-content: space-evenly;
        }

        .list-item {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-template-rows: auto auto;
            gap: 15px;
            align-items: center;
        }

        .profile-image {
            width: 50px;
            height: 50px;
        }

        .profile-info {
            display: grid;
            align-items: center;
        }

        .profile-name {
            margin: 0;
        }

        .location {
            font-size: 12px;
            color: #999;
        }

        .button {
            color: #fff;
            top: 1077px;
            left: 1646px;
            width: 78px;
            height: 27px;
            background: #490057 0% 0% no-repeat padding-box;
            border-radius: 13px;
            border: none;
            cursor: pointer;
        }

        .icon {
            width: 20px;
            height: 20px;
        }
`

export const Post = styled.div`
    background-color: #fff;
    border-radius: 16px;
    padding: 26px 49px 28px 24px;
    gap: 24px;
    display: grid;
    grid-template-columns: auto 1fr;
    position: relative;

     .menu{
        position: absolute;
        top: 5px;
        right: 15px;
        color:grey;
    }
    .floating-card{
        position: absolute;
        top: 20px;
        right: -100px;
        color:grey;
    }

    .imgn{
        width: 473px;
        height: 334px;
    }
    .postArea{
        display:grid;
        grid-template-rows: auto auto auto auto;
    }
    .profile{
        display: flex;
        justify-content: space-between;
    }
    .pImage{
        width: 47px;
        height:47px;
    }
    .name{
        color: #490057;
        font-size 26px;
    }
    .pnames{
        width: 46px;
        height: 15px;
        text-align: left;
        font: normal normal normal 11px/16px Work Sans;
        letter-spacing: 0px;
        color: #787878;
    }
    .content{
        width: 355px;
        height: 105px;
        text-align: left;
        letter-spacing: 0px;
        color: #787878;
    }
    .flex-all{
        display: inline-grid;
        gap: 27px;
        grid-template-columns: 28px 56px 64px 64px;
    }
    .reply{
        margin-left: 20px;
    }
    .pImageReply{
        width: 29px;
        height: 29px;
    }
    .pTextReply{
        width: 289px;
        height: 47px;
        text-align: left;
        letter-spacing: 0px;
        color: #787878;
    }
    .gridreply{
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
    }
    .lastSeen{
        font-size: 10px;
        text-align: left;
        letter-spacing: 0px;
        color: #787878;
        padding: 5px 0;
    }
    .flexLike{
        display:flex;
        margin-top: 25px;

    }
    .flexLike img{
        width: 20px;
        height: 19px;
        margin-right:10px;
    }
    .like{
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
    }
`
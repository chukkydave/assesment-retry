import React from 'react'
import share from "../../img/icon-ionic-md-share-alt-1@1x.png";
import info from "../../img/icon-material-report-1@1x.png";;

function Main() {
    return (
        <div style={{ backgroundColor: "#fff", height: "80px", width: "150px", display: "grid", gridTemplateRows: "auto auto", justifyContent: "center", alignContent: "space-evenly", borderRadius: "16px" }}>
            <div style={{ display: 'grid', gridTemplateColumns: "0.2fr 1fr", gap: "10px", alignItems: "center" }}>
                <img src={share} style={{ height: "15px", width: "15px" }} alt='share icon' />
                <span style={{ fontSize: "15px", color: "#490057" }}>Copy Link</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: "0.2fr 1fr", gap: "10px", alignItems: "center" }}>
                <img src={info} style={{ height: "15px", width: "15px" }} alt='share icon' />
                <span style={{ fontSize: "15px", color: "#490057" }}>Report Post</span>
            </div>

        </div>
    )
}

export default Main
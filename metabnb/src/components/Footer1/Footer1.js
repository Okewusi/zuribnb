import React from 'react'
import "./footer1.css"
import ellipse from "../Assets/Ellipse.jpg"
import MB from "../Assets/MBToken.jpg"
import open from "../Assets/open.png"
import opensea from "../Assets/OpenSea.png"
import metalogo from "../Assets/metalogo.png"
import metamask from "../Assets/metamask.png"

const Footer1 = () => {
  return (
    <div className='footerContainer'>
        <div>
            <img src={ellipse} alt="ellipse" />
            <img src={MB} alt="MBToken"/>
        </div>
        <div className='test'>
            <img src={metalogo} alt="metalogo"/>
            <img src={metamask} alt="metamask"/>
        </div>
        <div>
            <img src={open} alt="opensea logo" />
            <img src={opensea} alt="opensea"/>
        </div>
    </div>
  )
}

export default Footer1
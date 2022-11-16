import React from 'react'
import stars from "../Assets/stars.jpg"
import "./frame.css"


const Frame = ({src,alt}) => {
  return (
    <div className='frameContainer'>
        <div className='imgCon'>
            <img src={src} alt={alt}/>
        </div>
        <div className='about'>
            <div className='left'>
                <p>Desert king</p>
                <p>2345km away</p>
                <img src={stars} alt="rating"/>
            </div>
            <div className='right'>
                <p className='bold'>1MBT per night</p>
                <p>available for 2 weeks stay</p>
            </div>
        </div>
    </div>
  )
}

export default Frame
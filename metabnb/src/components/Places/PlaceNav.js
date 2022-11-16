import React from 'react'
import location from "../Assets/location.png"
import "./placenav.css"

const PlaceNav = () => {
  return (
    <div className='placeNav'>
        <ul>
            <li>Restuarant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantest city</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
        </ul>
        <img src={location} alt="location"/>
    </div>
  )
}

export default PlaceNav
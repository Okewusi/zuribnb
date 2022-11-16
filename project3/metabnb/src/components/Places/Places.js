import React from 'react'
import PlaceNav from './PlaceNav'
import "./places.css"
import Frame from '../Session2/Frame'
import place1 from "../Assets/place1.png"
import place2 from "../Assets/place2.png"
import place3 from "../Assets/place3.png"
import place4 from "../Assets/place4.png"
import place5 from "../Assets/place5.png"
import place6 from "../Assets/place6.png"
import place7 from "../Assets/place7.png"
import place8 from "../Assets/place8.png"
import place9 from "../Assets/place9.png"
import place10 from "../Assets/place10.png"
import place11 from "../Assets/place11.png"
import place12 from "../Assets/place12.png"
import place13 from "../Assets/place13.png"
import place14 from "../Assets/place14.png"
import place15 from "../Assets/place15.png"
import place16 from "../Assets/place16.png"

const Places = () => {
  return (
    <div className='placeCon'>
        <PlaceNav />
        <div className='allplaces'>
            <div className='place'>
                <Frame src={place1} alt="place1"/>
                <Frame src={place2} alt="place2"/>
                <Frame src={place3} alt="place3"/>
                <Frame src={place4} alt="place4"/>
            </div>
            <div className='place'>
                <Frame src={place5} alt="place1"/>
                <Frame src={place6} alt="place2"/>
                <Frame src={place7} alt="place3"/>
                <Frame src={place8} alt="place4"/>
            </div>
            <div className='place'>
                <Frame src={place9} alt="place1"/>
                <Frame src={place10} alt="place2"/>
                <Frame src={place11} alt="place3"/>
                <Frame src={place12} alt="place4"/>
            </div>
            <div className='place'>
                <Frame src={place13} alt="place1"/>
                <Frame src={place14} alt="place2"/>
                <Frame src={place15} alt="place3"/>
                <Frame src={place16} alt="place4"/>
            </div>
        </div>
    </div>
  )
}

export default Places
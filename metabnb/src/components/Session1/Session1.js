import React from 'react'
import topleft from "../Assets/topleft.jpg"
import topright from "../Assets/topright.jpg"
import bottomright from "../Assets/bottomright.jpg"
import bottomleft from "../Assets/bottomleft.jpg"
import "./session1.css"

const Session1 = () => {
  return (
    <div className='sessionContainer'>
        <div className='textContainer'>
            <h2>Rent a <strong>Place</strong>  away from <br/> <strong>Home</strong> in the <strong>Metaverse</strong></h2>
            <p>We provide you access to luxury and affordable houses<br/> in
                the metaverse, get a chance to turn your<br/> imagination to 
                reality at your comfort zone
            </p>
            <form>
                <input type='text' placeholder='Search for location'/>
                <button>Search</button>
            </form>
        </div>
        <div className='imageContainer'>
            <div className='leftContainer'>
                <div className='img'>
                    <img src={topleft} alt="image1"/>
                </div>
                <div className='img'>
                    <img src={bottomleft} alt="image2"/>
                </div>
            </div>
            <div className='rightContainer'>
                <div className='img'>
                    <img src={topright} alt="image3"/>
                </div>
                <div className='img'>
                    <img src={bottomright} alt="image4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Session1
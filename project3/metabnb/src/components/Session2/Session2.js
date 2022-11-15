import React from 'react'
import frame1 from "../Assets/Frame1.jpg"
import frame2 from "../Assets/Frame21.jpg"
import frame3 from "../Assets/Frame2.jpg"
import frame4 from "../Assets/Frame4.jpg"
import frame5 from "../Assets/Frame5.jpg"
import frame6 from "../Assets/Frame6.jpg"
import frame7 from "../Assets/Frame7.jpg"
import frame8 from "../Assets/Frame8.png"
import Frame from './Frame'
import "./session2.css"


const Session2 = () => {
  return (
    <div className='sesContainer'>
        <h2>Inspiration for your next adventure</h2>
        <div className='destContainer'>
            <div className='top'>
                <Frame src={frame1} alt="dest1"/>
                <Frame src={frame2} alt="dest2"/>
                <Frame src={frame3} alt="dest3"/>
                <Frame src={frame4} alt="dest4"/>
            </div>
            <div className='bottom'>
                <Frame src={frame5} alt="dest5"/>
                <Frame src={frame6} alt="dest6"/>
                <Frame src={frame7} alt="dest7"/>
                <Frame src={frame8} alt="dest8"/>
            </div>
            
        </div>
    </div>
  )
}

export default Session2
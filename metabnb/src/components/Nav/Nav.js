import React,{useState} from 'react'
import logo from "../Assets/logo.jpg"
import brand from "../Assets/name.jpg"
import "./nav.css"
import Hamburger from './Hamburger'
import Modal from '../Modal/Modal'

const Nav = () => {
    const [showmodal, setShowModal] = useState(false)

  return (
    <div className='navContainer'>
        <div className='logoContainer'>
            <div className='imgcon'><img src={logo} alt="logo" /></div>
            <div className='brandcon'><a href='/'><img src={brand} alt="brand name"/></a></div>
        </div>
        <div className='mobilenav'>
            <ul className="mobile">
                <li><a href='/'>Home</a></li>
                <li><a href='/places'>Place to Stay</a></li>
                <li><a href='/'>NFTs</a></li>
                <li><a href='/'>Community</a></li>
            </ul>
            <div className='wallet'>
                <button onClick={()=>setShowModal(true)}>Connect wallet</button>
            </div>
            {/* <div className='hamcontainer'>
                <Hamburger />
            </div> */}
        </div>
        <Modal open={showmodal} setShowModal={setShowModal}/>
    </div>
  )
}

export default Nav
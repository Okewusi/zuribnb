import React,{useState} from 'react'
import logo from "../Assets/logo.jpg"
import brand from "../Assets/name.jpg"
import "./nav.css"
import Hamburger from './Hamburger'

const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = ()=>{
        setHamburgerOpen(!hamburgerOpen)
    }
  return (
    <div className='navContainer'>
        <div className='logoContainer'>
            <div className='imgcon'><img src={logo} alt="logo" /></div>
            <div className='brandcon'><img src={brand} alt="brand name"/></div>
        </div>
        <div className='mobilenav'>
            <ul className={`${hamburgerOpen ? "":"mobile"}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Place to Stay</a></li>
                <li><a href='/'>NFTs</a></li>
                <li><a href='/'>Community</a></li>
            </ul>
            <div className='wallet'>
                <button>Connect wallet</button>
            </div>
            <div className='hamcontainer'>
                <Hamburger />
            </div>
        </div>
        
    </div>
  )
}

export default Nav
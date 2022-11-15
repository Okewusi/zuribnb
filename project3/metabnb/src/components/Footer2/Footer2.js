import React from 'react'
import "./footer2.css"
import logob from "../Assets/logob.jpg"
import brand from "../Assets/brand.jpg"
import fb from "../Assets/meta.jpg"
import insta from "../Assets/insta.jpg"
import tw from "../Assets/twitter.jpg"

const Footer2 = () => {
  return (
    <div className='footCon'>
        <div className='links'>
            <div className='brandsocials'>
                <div>
                    <img src={logob} alt='logo'/>
                    <img src={brand} alt='brand'/>
                </div>
                <div className='socials'>
                    <img src={fb} alt='facebook'/>
                    <img src={insta} alt='instagram'/>
                    <img src={tw} alt='twitter'/>
                </div>
            </div>
            <div>
                <h3>Community</h3>
                <ul>
                    <li><a href='/'>NFT</a></li>
                    <li><a href='/'>Tokens</a></li>
                    <li><a href='/'>Landlords</a></li>
                    <li><a href='/'>Discord</a></li>
                </ul>
            </div>
            <div>
                <h3>Places</h3>
                <ul>
                    <li><a href='/'>Castle</a></li>
                    <li><a href='/'>Farms</a></li>
                    <li><a href='/'>Beach</a></li>
                    <li><a href='/'>Learn more</a></li>
                </ul>
            </div>
            <div>
                <h3>About us</h3>
                <ul>
                    <li><a href='/'>Road map</a></li>
                    <li><a href='/'>Creators</a></li>
                    <li><a href='/'>Career</a></li>
                    <li><a href='/'>Contact us</a></li>
                </ul>
            </div>
        </div>
        <div>
            <p>2022 Metabnb</p>
        </div>
    </div>
  )
}

export default Footer2
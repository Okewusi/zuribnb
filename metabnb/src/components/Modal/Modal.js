import React from 'react'
import wallet1 from "../Assets/wallet1.png"
import wallet2 from "../Assets/wallet2.png"
import arrow from "../Assets/Vector.png"
import "./modal.css"

const Modal = ({open, setShowModal}) => {
    if(!open) return null
  return (
    <div className='modalContainer'>
        <div className='heading'>
            <h3>Connect Wallet</h3>
            <button onClick={()=>setShowModal(false)}>X</button>
        </div>
        <div className='optionCon'>
            <p>Choose preferred wallet:</p>
            <div className='option'>
                <div className='first'>
                    <img src={wallet1} alt="wallet1"/>
                    <h4>Metamask</h4>
                </div>
                <div>
                    <img src={arrow} alt="metamask"/>
                </div>
            </div>
            <div className='option'>
                <div className='first'>
                    <img src={wallet2} alt="wallet2"/>
                    <h4>WalletConnect</h4>
                    
                </div>
                <div>
                    <img src={arrow} alt="walletconnect"/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Modal
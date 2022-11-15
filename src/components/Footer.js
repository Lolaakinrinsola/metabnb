import footerLogo from './images/Group.svg'
import React from 'react';
import './Footer.scss';
import fb from './images/fb-icon.png';
import ig from './images/ig-icon.png';
import twitter from './images/twitter-icon.png';

export function Footer(){
    return(
        <div className='footer'>
            <div className='logo'>
                <div className='footerImg'>
                    <img src={footerLogo} alt="" className='footerLogo'/>
                    <div className='icons'>
                        <img src={fb} alt="" />
                        <img src={ig} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p>&copy; 2022 Metabnb</p>
                </div>
            </div>
                <div className='footerLinks'>
                    <h3>Community</h3>
                    <a href=''>NFT</a>
                    <a href=''>Tokens</a>
                    <a href=''>Landlords</a>
                    <a href=''>Discord</a>
                </div>
            <div className='logo'>
                <div className='footerLinks'>
                    <h3>Places</h3>
                    <a href=''>Castle</a>
                    <a href=''>Farms</a>
                    <a href=''>Beach</a>
                    <a href=''>Learn more</a>
                </div>
            </div>
                <div className='footerLinks'>
                    <h3>About us</h3>
                    <a href=''>Road map</a>
                    <a href=''>Creators</a>
                    <a href=''>Career</a>
                    <a href=''>Contact us</a>
                </div>
        </div>
    )
}
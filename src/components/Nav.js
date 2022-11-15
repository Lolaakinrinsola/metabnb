import logo from './images/metabnblogo.png';
import {Link} from "react-router-dom";
import './Nav.scss';
import { useState } from 'react';
import footerLogo from './images/Group.svg';
import { Wallet } from './Wallet';

export function Nav(){
    const [isOpen,setIsOpen]=useState(false);
    const toggleDrawer=()=>{
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    const [isWalletOpen,setWalletIsOpen]=useState(false);
    const toggleWallet=()=>{
        setWalletIsOpen(!isWalletOpen);
        console.log(isWalletOpen)
    };

    return(
        <div id='nav' >
            <div className="MobileLogo">
                <div className='dropdown' >
                    <div onClick={toggleDrawer}>
                        <div className='lines'></div>
                        <div className='lines'></div>
                        <div className='lines'></div>
                    </div>
                    {isOpen &&
                    <>
                        <div className='drawer' >
                            <div className='logo'>
                                <div id='close' onClick={toggleDrawer}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <img src={footerLogo} alt=""/>
                                <Link to='/' className='drawerLink'>Home </Link>
                                <Link to='./places' className='drawerLink' id="Link">Place to stay</Link>
                                <Link to='' className='drawerLink'>NFTs</Link>
                                <Link to='' className='drawerLink'>Community</Link>
                            </div>
                        </div>
                        <div className='navBackground' onClick={toggleDrawer}></div>
                    </>}
                </div>
                    <img src={logo} alt="logo" id='navImage' />
            </div>
            <div className='navBar'>
                <Link to='/' className='navLink'>Home  </Link>
                <Link to='./places' className='navLink' id="Link">Place to stay</Link>
                <Link to='' className='navLink'>NFTs</Link>
                <Link to=''  className='navLink fourthLink'>Community</Link>
            </div>
            <div>
                <button onClick={toggleWallet} id='connectButton'>
                    Connect wallet
                </button>
                {isWalletOpen && 
                    <div>
                        <div onClick={toggleWallet} className='navBackground'></div>
                        <Wallet onclick={toggleWallet}/> 
                    </div>
                }
            </div>
        </div>
    )
}
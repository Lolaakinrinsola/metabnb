import { Card } from './Card'
import header from './images/header.png'
import secondheader from './images/secondHeader.png'
import mbtoken from './images/mbtoken.png'
import metamask from './images/metamask.png'
import opensea from './images/opensea.png'
import './Main.scss';
import first from './images/adventures/first.png';
import second from './images/adventures/2ndAdventure.png';
import third from './images/adventures/3rdAdventure.png';
import fourth from './images/adventures/4thAdventure.png';
import fifth from './images/adventures/5thAdventure.png';
import sixth from './images/adventures/6thAdventure.png';
import seventh from './images/adventures/7thAdventure.png';
import eigth from './images/adventures/8thAdventure.png';
export function Main(){
    return(
        <div>
            <header>
                <div id='headerImg'>
                    <img src={header} alt='header image' height='300em'  />
                </div>
                <div className='Meta'>
                    <h1>Rent a <span>place</span> away from <span>home</span> in the <span>metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance 
                        to turn your imagination to reality at your comfort zone</p>
                    <div className='headerInput'>
                            <input type="text" name="" id="" placeholder='search for location' />
                            <button type="submit">Search</button>
            
                    </div>
                </div>
            </header>
                <div className='headerIcons'>
                    <img src={mbtoken} alt="" />
                    <img src={metamask} alt="" />
                    <img src={opensea} alt="" />
                </div>
            
            <div className='adventures'>
                <h2>Inspiration for your next adventure</h2>
                <div className='mainCards'>
                    <Card link={first} alt='first'/>
                    <Card link={second} alt='first'/>
                    <Card link={third} alt='first'/>
                    <Card link={fourth} alt='first'/>
                    <Card link={fifth} alt='first'/>
                    <Card link={sixth} alt='first'/>
                    <Card link={seventh} alt='first'/>
                    <Card link={eigth} alt='first'/>
                </div>
            </div>

            <header className='secondHeader'>
                <div>
                    <img src={secondheader} alt='header image' height='200em' id='headerImg' />
                </div>
                <div className='Meta'>
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. 
                        Loyal customers gets amazing gift cards which are traded as NFTs.
                        These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <div className='headerInput'>
                        <button type="submit">Learn More</button>
                    </div>
                </div>
            </header>

        </div>
    )
}
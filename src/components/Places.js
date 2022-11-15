import { Card } from "./Card";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import first from './images/adventures/first.png';
import second from './images/adventures/2ndAdventure.png';
import third from './images/adventures/3rdAdventure.png';
import fourth from './images/adventures/4thAdventure.png';
import fifth from './images/adventures/5thAdventure.png';
import sixth from './images/adventures/6thAdventure.png';
import seventh from './images/adventures/7thAdventure.png';
import eigth from './images/adventures/8thAdventure.png';
import ninth from './images/adventures/9thAdventure.png';
import tenth from './images/adventures/10thAdventure.png';
import eleventh from './images/adventures/11thAdventure.png';
import twelvth from './images/adventures/12thAdventure.png';
import thirteen from './images/adventures/13thAdventure.png';
import fourteen from './images/adventures/14thAdventure.png';
import fifteen from './images/adventures/15thAdventure.png';
import sixteen from './images/adventures/16thAdventure.png';
import './Places.scss'
import setting from './images/setting.png'
export function Places(){
    return(
        <div>
            <Nav/>
            <div>
                <div className='locationNav'>
                    <div>
                        <select name="location" id="location" >
                            <option value="Resturant">Resturant</option>
                            <option value="Cottage">Cottage</option>
                            <option value="Castle">Castle</option>
                            <option value="fantast city">fantast city</option>
                            <option value="beach">beach</option>
                            <option value="Carbins">Carbins</option>
                            <option value="Off-grid">Off-grid</option>
                            <option value="Farm">Farm</option>
                        </select>
                    </div>
                    <div className="placesNav">
                        <a href="#">Resturant</a>
                        <a href="#">Cottage</a>
                        <a href="#">Castle</a>
                        <a href="#">Fantasy</a>
                        <a href="#">beach</a>
                        <a href="#">Carbins</a>
                        <a href="#">Off-grid</a>
                        <a href="#">Farm</a>
                    </div>
                    <button className='location'>
                        <p>Location</p>
                        <img src={setting} alt="" />
                    </button>
                </div>
                <div className='mainCards placesCard'>
                    <Card link={fifth} alt='first'/>
                    <Card link={sixth} alt='first'/>
                    <Card link={seventh} alt='first'/>
                    <Card link={eigth} alt='first'/>
                    <Card link={first} alt='first'/>
                    <Card link={second} alt='first'/>
                    <Card link={third} alt='first'/>
                    <Card link={fourth} alt='first'/>
                    <Card link={ninth} alt='first'/>
                    <Card link={tenth} alt='first'/>
                    <Card link={eleventh} alt='first'/>
                    <Card link={twelvth} alt='first'/>
                    <Card link={thirteen} alt='first'/>
                    <Card link={fourteen} alt='first'/>
                    <Card link={fifteen} alt='first'/>
                    <Card link={sixteen} alt='first'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
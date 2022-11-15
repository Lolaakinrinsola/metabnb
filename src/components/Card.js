import React from "react";
import './Card.scss';
import star from './images/star.png'
export function Card (props){
    return(
        <div>

            <div className='card'>
                <img className='cardImg' src={props.link} alt={props.alt} />
                <div className='cardDesc'>
                    <div>
                        <p>Desert king</p>
                        <h5>1MBT per night</h5>
                    </div>
                    <div className='cardDesc'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                </div>
            <img src={star} alt="rating" className="star"/>
            </div>
        </div>
    )
}
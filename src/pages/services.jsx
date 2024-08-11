import React from 'react';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTools, faCarOn } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './New';
const Services = () => {
    return (
        <div className="services-container">
            <header className="services-header">
                {/* <h1 className='heading'>Our Service</h1> */}
                
            </header>
            <section className="services-content">
                <div className="service-card1">
                
                <FontAwesomeIcon icon={faCar} className="service-icon"/>
                    <h2 className='title1'>CAR RENTAL SERVICE</h2>
                    <p className='para'>"Experience hassel-free travel with our reliable car rental service, offering a wide range of vehicles to suit every need and budget."</p>
                    <Link to="/cars" className='a'>Go To</Link>
                </div>
                <div className="service-card2">
                    <FontAwesomeIcon icon={faTools} className="service-icon" />
                    <h2 className='title1'>CAR REPAIR SERVICES</h2>
                    <p className='para'>"Expert car repair service with quick turnaround times. Quality parts and skilled technicians ensure your vehicle is road-ready."</p><br></br>
                    <Link to="/New" className='a' >Go To</Link>
                </div>
                <div className="service-card3">
                    <FontAwesomeIcon icon={faCarOn} className="service-icon" />
                    <h2 className='title1'>CAR ACCESSORIES SERVICE</h2>
                    <p className='para'>"Enhance your driving experience with our car accessories.Start from GPS,we have everything to personalise your vehicle."</p>
                    <Link to='/Products' className='a'>Go To</Link>
                </div>
                
            </section>
        </div>
    );
}

export default Services;
import React from 'react';
import Vithushan from "../Assets/Profile-meet.jpg"
import "../components/ProfileStyle.css"
import Button from "../components/Button"

export default function ProfileComponent() {
    return (
        <div classsName='mainContainer'  >
            <h1> Our Products </h1>
            <div className='wrapper'>
            <div className='card'>
                    <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div>
                    <div className='content'>
                        <h3>ISO27001 Audit</h3>
                        <p>The information security standard</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div>
                    <div className='content'>
                        <h3>Cloud Security Alliance Audit</h3>
                        <p>Cloud Security Compliance with CSA CCM Matrix</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div>
                    <div className='content'>
                        <h3>CIS 20 Audit</h3>
                        <p>Compliance with SANS CIS 4.0 compliance</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div>
                    <div className='content'>
                        <h3>NIST 800-53 Audit</h3>
                        <p>Compliance with SANS CIS 4.0 compliance</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div>
                    <div className='content'>
                        <h3>NIST 800-53 Audits</h3>
                        <p>NIST Compliance Audits</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                
                
            </div>

            </div>
           
    );
}

import React from 'react';
import "../components/ProfileStyle.css"
import Button from "../components/Button"
import { Link } from 'react-router-dom';


export default function ProfileComponent() {
    return (
        <div classsName='mainContainer'  >
            <h1> Our Products </h1>
            <div className='wrapper'>
            <div className='card'>
                    <div className='content'>
                        <h3>ISO27001 Audit</h3>
                        <p>The information security standard</p>
                        <div className='social-media'>
                        <Link to="/product/ISO" className="buttonClass">Learn More</Link>

                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>Cloud Security Alliance Audit</h3>
                        <p>Cloud Security Compliance with CSA CCM Matrix</p>
                        <div className='social-media'>
                        <Link to="/product/CSAA" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>CIS 20 Audit</h3>
                        <p>Compliance with SANS CIS 4.0 compliance</p>
                        <div className='social-media'>
                        <Link to="/product/CIS" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>NIST 800-53 Audit</h3>
                        <p>Compliance with SANS CIS 4.0 compliance</p>
                        <div className='social-media'>
                        <Link to="/product/NISTA" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>Cyber Threat and Vulnerability Audit and Consulting</h3>
                        <p>Provide a list of items for a Cyber Threat and Vulnerability Audit and Consulting Helpdesk marketing web page</p>
                        <div className='social-media'>
                        <Link to="/product/cyberthreat" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>Cyber Identity and Access Management Audit and Consulting</h3>
                        <p>Provide a list of items for a Cyber Identity and Access Management Audit and Consulting and Consulting Helpdesk marketing web page</p>
                        <div className='social-media'>
                        <Link to="/product/cyber" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>Resilience Audit and Consulting</h3>
                        <p>User Provide a list of items for a Cyber Resilience Audit and Consulting and Consulting Helpdesk marketing web page</p>
                        <div className='social-media'>
                        <Link to="/product/resil" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>Data Protection Audit and Consulting</h3>
                        <p>User Provide a list of items for a Data Protection Audit and Consulting Helpdesk marketing web page</p>
                        <div className='social-media'>
                        <Link to="/product/datap" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>Azure Security Audit and Consulting</h3>
                        <p>Provide a list of items for an Azure Security Audit and Consulting Helpdesk marketing web page</p>
                        <div className='social-media'>
                        <Link to="/product/azure" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <h3>GCP Security Audit and Consulting</h3>
                        <p>Provide a list of items for an GCP Security Audit and Consulting Helpdesk marketing web page</p>
                        <div className='social-media'>
                        <Link to="/product/gcp" className="buttonClass">Learn More</Link>
                        </div>
                    </div>
                </div>

                
                
            </div>

          

            </div>
           
    );
}

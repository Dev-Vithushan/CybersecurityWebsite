import * as React from 'react';
import Vithushan from "../Assets/Profile-meet.jpg"
import Navbar from '../components/Navbar';
import Tool from '../components/Tool';

export default function ApplicationSecurity() {
  return (
    <div>
        <Navbar/>

        <h1> Application Security </h1>
            <div className='wrapper'>
            <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Code Review  </h3>
                        <p>Analyzing the source code to identify security flaws, adherence to coding standards, and potential vulnerabilities.</p>
                        
                        <div className='social-media' >
                        <h4> Tools  </h4>
                        {/* <div className='toolContainer' style={{display:'flex', flexDirection:'right'}}> */}
                        <Tool  text="Fortify Static Code Analyzer (SCA)"/>
                        <Tool text="Veracode Static Analysis (SAST)"/>
                        <Tool  text="Checkmarx Static Application Security Testing (CxSAST)"/>
                        <Tool text="SonarQube"/>
                        {/* </div> */}
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Static Application Security Testing (SAST)</h3>
                        <p>Automated tools that scan the source code or compiled binaries to find vulnerabilities without executing the program.</p>
                        <div className='social-media'>
                        <h4> Tools </h4>
                        <p> OWASP ZAP (Zed Attack Proxy), Burp Suite, Acunetix, Qualys Web Application Scanning (WAS) </p>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Dynamic Application Security Testing (DAST)</h3>
                        <p>Assessing a running application for vulnerabilities by simulating attacks and analyzing responses.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Penetration Testing</h3>
                        <p>Ethical hackers simulate real-world attacks to identify and exploit vulnerabilities, providing insights into potential risks.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Dependency Scanning</h3>
                        <p>Identifying and managing vulnerabilities in third-party libraries and components used in the application.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Security Architecture Review</h3>
                        <p>Evaluating the overall design and architecture of the application to ensure it aligns with security best practices.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Security Training and Awareness</h3>
                        <p>Educating developers and other stakeholders about secure coding practices and potential threats.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Security Training and Awareness</h3>
                        <p>Educating developers and other stakeholders about secure coding practices and potential threats.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Security Controls</h3>
                        <p>Implementing measures like encryption, access controls, and secure configurations to mitigate identified risks.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {/* <div className='profile-img'>
                        <img className='Image' src={Vithushan} alt='profile one' />
                    </div> */}
                    <div className='content'>
                        <h3>Incident Response Planning</h3>
                        <p>Preparing for and responding to security incidents effectively.</p>
                        <div className='social-media'>
                        <button className="buttonClass" type="submit"> Learn More</button>
                        </div>
                    </div>
                </div>



            </div>
    </div>
  );
}
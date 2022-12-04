import React,{useState} from 'react'
import Hamburger from './Hamburger';

import './Navbar.css';
import Toggle from './Toggle';


function Navbar() {

    return (
        <div>
            <div className="nav-container">
            <header>
                <div className="nav-content">
               
                    <div className="nav-logo">
                        <img src='/images/logo.svg' alt='' style={{ width: '47px', height: '47px' }} />
                        <span>Silicon</span>
                    </div>
                    <div className="nav-drop">
                        <div className="dropdown">
                            <div className="dropbtn" style={{ color: '#4d5171' }}>
                                Landings <img src='/images/dd.png' alt='' />
                                <div className="dropdown-content">
                                <ul>
                                    <img src='/images/Sc.png' />
                                </ul>
                                    <ul>
                                        <li>Template Intro Pages</li>
                                        <li>Mobile App Showcase</li>
                                        <li>Mobile&nbsp;App&nbsp;ShowCase&nbsp;v.2</li>
                                        <li>Startup <button style={{
                                            backgroundColor: 'rgb(110, 196, 110)', color: '#ffffff'
                                            , border: 'none', borderRadius: '5px'
                                        }}>New</button></li>
                                        <li>SaaSv.1</li>
                                        <li>SaaSv.2</li>
                                        <li>SaaSv.3</li>
                                        <li>Financial Consulting</li>
                                        <li>Medical</li>

                                    </ul>
                                    <ul>
                                        <li>IT(Software)&nbsp;Company</li>
                                        <li>Conference</li>
                                        <li>Digital Agency</li>
                                        <li>Blog Homepage</li>

                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="dropdown">
                            <div className="dropbtn">
                                Pages <img src='/images/dd.png' alt='' className='d-img' />
                                <div className="dropdown-content">
                                    <ul>
                                        <li>About</li>
                                        <li>About v.1</li>
                                        <li>About v.2</li>
                                        <li>Services</li>
                                        <li>Services v.1</li>
                                        <li>Services v.2</li>
                                        <li>ServiceDetails&nbsp;v.1</li>
                                        <li>ServiceDetails v.2</li>


                                    </ul>
                                    <ul>
                                        <li>Blog</li>
                                        <li>List&nbsp;View&nbsp;with&nbsp;Sidebar</li>
                                        <li>Grid View with Sidebar</li>
                                        <li>List View no Sidebar</li>
                                        <li>Grid View no Sidebar</li>
                                        <li>Simple Feed</li>
                                        <li>Single Post</li>
                                        <li>Podcast</li>

                                    </ul>
                                    <ul>
                                        <li>Pricing</li>
                                        <li>Pricing&nbsp;Pages</li>
                                        <li>Contacts</li>
                                        <li>Contacts v.1</li>
                                        <li>Contacts v.2</li>
                                        <li>Contacts v.3</li>
                                        <li>Speciality</li>
                                        <li>404 Error v.1</li>
                                        <li>404 Error v.2</li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="dropdown">
                            <div className="dropbtn">
                                Portfolio  <img src='/images/dd.png'/>
                                <div className="dropdown-content">
                                    <ul>
                                        <li>Grid View</li>
                                        <li>List View</li>

                                        <li>Slider View</li>
                                        <li>Single&nbsp;Project</li>
                                    </ul>

                                </div>

                            </div>


                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">
                                Support
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">
                                Docs
                            </div>
                        </div>

                    </div>
                    
                    
                    <div id='gapping'>

                    </div>
                    <div id='cart'>
                        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1196 0 48 48 0 11-96 0zm336-48a48 48 0 110 96 48 48 0 110-96z"></path>
    </svg>
                        Buy now</button>
                    </div>
                </div>
                </header>
                <div className='toggle'>
                      
                    </div>
                   <div className='ham1'>
                    <Hamburger/>
                   </div>
</div>
            
        </div >
    )
}

export default Navbar;
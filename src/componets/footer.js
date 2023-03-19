import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './footer.css'

function Footer() {
  return (
    <div className='footer-containor'>
        <h3>Join Us To The Adventer newsletter to recieve our best vacation deals</h3>

        <p>you can Subscribe any time you want</p>

        <div className='content'>
            <div className='form'>
                <input type="email" name='email' placeholder='Your Email'/>
                <Button 
                stylbutton={ "btn-outline" }
                content="Subscribe"
                ></Button>
            </div>

            <div className='containor-discription'>
                <div className='dispc'>
                    <div className='disp'>
                        <h4>AboutUs</h4>
                        <ul>
                            <Link>service</Link>
                            <Link>product</Link>
                            <Link>how it work</Link>
                            <Link>carrere</Link>
                            
                        </ul>
                    </div>

                    <div className='disp'>
                        <h4>ContactUs</h4>
                        <ul>
                            <Link>Contact</Link>
                            <Link>Support</Link>
                            <Link>Destination</Link>
                            <Link>Supportship</Link>
                            
                        </ul>
                    </div>

                </div>

                <div className='dispc'>
                    
                    <div className='disp'>
                        <h4>Videos</h4>
                        <ul>
                            <Link>Submit Videos</Link>
                            <Link>Agency</Link>
                            <Link>Product Videos</Link>
                            <Link>Cours</Link>
                            
                        </ul>
                    </div>

                    <div className='disp'>
                        <h4>Social Medea</h4>
                        <ul>
                            <Link>Facebook</Link>
                            <Link>Youtube</Link>
                            <Link>Instgram</Link>
                            <Link>Twiter</Link>
                            
                        </ul>
                    </div>


                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
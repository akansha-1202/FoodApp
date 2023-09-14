import React from 'react'
import './footer.css'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Footer = () => {
    const scrollToTop = () => {
        window.scroll(0, 0)
    }
    return (
        <>
            <footer>
                <div id='footer-left-part'>
                    <div id='footer-social-icons'>
                        <Link to='https://www.facebook.com/food.com/' target='_blank'><BiLogoFacebook id='footer-facebook-icon' /></Link>
                        <Link to='https://www.instagram.com/fooddotcom/' target='_blank'><BiLogoInstagram id='footer-instagram-icon' /></Link>
                        <Link to='https://in.pinterest.com/fooddotcom/' target='_blank'><BiLogoPinterestAlt id='footer-pinterest-icon' /></Link>
                        <Link to='https://twitter.com/fooddotcom' target='_blank'><BsTwitter id='footer-twitter-icon' /></Link>
                        <Link to='https://www.youtube.com/fooddotcom' target='_blank'><BsYoutube id='footer-youtube-icon' /></Link>
                        <Link to='https://help.food.com/hc/en-us' target='_blank'><FiMail id='footer-mail-icon' /></Link>
                        <div id='back-to-top'>
                            <AiOutlineArrowUp onClick={scrollToTop} /><span onClick={scrollToTop}>BACK TO TOP</span>
                        </div>
                    </div>
                    <div id='footer-nav-links-left-part'>
                        <p >All Categories</p>
                        <p >Site Map</p>
                        <p >About Us</p>
                        <p><Link to='https://help.food.com/hc/en-us' target='_blank'>Help</Link></p>
                    </div>
                </div>
                <div id='footer-right-part'>
                    <div className="footer-right-part-dropdown">
                        <p className='footer-right-part-dropdown-button'>The Discovery Family Of Networks &nbsp; &#8743;</p>
                        <div className="footer-right-part-dropdown-content">
                            <Link to='https://hgtv.pl/' target='_blank' className="footer-right-part-dropdown-links">HGTV Poland</Link>
                            <Link to='https://www.travelchannel.com/' target='_blank' className="footer-right-part-dropdown-links">Travel Channel</Link>
                            <Link to='https://www.cookingchanneltv.com/' target='_blank' className="footer-right-part-dropdown-links">Cooking Channel</Link>
                            <Link to='https://www.foodnetwork.com/' target='_blank' className="footer-right-part-dropdown-links">Food Network</Link>
                            <Link to='https://magnolia.com/DIYNetwork/' target='_blank' className="footer-right-part-dropdown-links">DIY Network</Link>
                            <Link to='https://www.hgtv.com/' target='_blank' className="footer-right-part-dropdown-links">HGTV</Link>
                        </div>
                    </div>
                    <div>
                        <p>&copy; 2023 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.</p>
                    </div>
                    <div id='footer-nav-links-right-part'>
                        <Link to='https://corporate.discovery.com/contact/advertising/' target='_blank'>Advertise</Link>
                        <Link to='https://corporate.discovery.com/tracking-technologies-notice/#targeted' target='_blank'>Adchoices</Link>
                        <Link to='https://corporate.discovery.com/privacy-policy/' target='_blank'>Privacy Notice</Link>
                        <Link to='https://corporate.discovery.com/visitor-agreement/' target='_blank'>Visitor Agreement</Link><br />
                        <Link to='https://corporate.discovery.com/privacy-policy/#cappi' target='_blank'>California Privacy Notice</Link>
                        <Link to='' target='_blank'>Do Not Sell or Share My Personal Information</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
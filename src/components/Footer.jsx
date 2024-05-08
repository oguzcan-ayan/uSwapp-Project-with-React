import React from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className='uswapp-footer'>
        <div className='uswapp-about-us'>
          <h3>uSwapp</h3>
          <div className='uswapp-about-us-title'>
            <h4>About Us</h4>
            <span><BsInfoCircle /></span>
          </div>
          <div className='about-us-container'>
            <p>Who we are</p>
            <p>Founders</p>
            <p>Our Policy</p>
          </div>
        </div>

        <div className='uswapp-contact-us'>
          <div className='uswapp-contact-us-title'>
            <h4>Contact Us</h4>
            <span><MdContactMail /></span>
          </div>
          <div className='contact-btns'>
            <button className='wp-contact-btn'>
              <a href="https://wa.me/+905376469421" target="_blank" rel="noreferrer">
                Whatsapp
                <IoLogoWhatsapp />
              </a>
            </button>
            <button className='dc-contact-btn'>
              <a href="https://discord.gg/JUBnyUCb" target='_blank' rel='nopreferrer'>
                Discord
                <FaDiscord />
              </a>
            </button>
          </div>
        </div>

        <div className='uswapp-live-support'>
          <div className='uswapp-live-support-title'>
            <h4>Live Support</h4>
            <span><MdOutlineSupportAgent /></span>
          </div>
        </div>

        <div className='uswapp-social-media'>
          <h4>Our Social Media Accounts</h4>
          <div className='uswapp-social-media-icons'>
            <a href='https://www.facebook.com/oguzcan.ayan.75' target='_blank'><FaFacebookF /></a>
            <a href='https://www.instagram.com/oguzcan.ayan1/' target='_blank'><GrInstagram /></a>
            <a href='https://twitter.com/Oguzcan_Ayan_1' target='_blank'><FaTwitter /></a>
            <a href='https://www.youtube.com/channel/UCLNwJurNmEdCrLkmIOQ_Eng' target='_blank'><GrYoutube /></a>
          </div>
        </div>

        <div className='uswapp-mobile-apps'>
          <div className='uswapp-mobile-apps-title'>
            <h4>Mobile Apps</h4>
            <span><FaMobileScreenButton /></span>
          </div>
          <img className='app-store' src="assets\images\app-store-download.png" alt="content not found" />
          <img className='google-play-store' src="assets\images\google-play-store-download.png" alt="content not found" />
          <img className='app-gallery-huawei' src="assets\images\app-gallery-huawei-download.svg" alt="content not found" />
        </div>

        <div className='uswapp-help'>
          <h4>Help</h4>
          <p>Often Questioned Problems</p>
          <p>Transaction History</p>
        </div>
      </div>
      <div className='uswapp-privacy'>
        <div className='all-rights'>
          <span>@2024 uSwapp</span>
          <span>- All Rights Reserved.</span>
        </div>
        <div className='privacy-policy'>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
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
          <h4>
            About Us
            <span><BsInfoCircle /></span>
          </h4>
          <div className='about-us-container'>
            <p>Who we are</p>
            <p>Founders</p>
            <p>Our Policy</p>
          </div>
        </div>

        <div className='uswapp-contact-us'>
          <h4>
            Contact Us
            <span><MdContactMail /></span>
          </h4>
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
          <h4>
            Live Support
            <span><MdOutlineSupportAgent /></span>
          </h4>
        </div>

        <div className='uswapp-social-media'>
          <h4>Our Social Media Accounts</h4>
          <a href='https://www.facebook.com/oguzcan.ayan.75' target='_blank'><FaFacebookF /></a>
          <a href='https://www.instagram.com/oguzcan.ayan1/' target='_blank'><GrInstagram /></a>
          <a href='https://twitter.com/Oguzcan_Ayan_1' target='_blank'><FaTwitter /></a>
          <a href='https://www.youtube.com/channel/UCLNwJurNmEdCrLkmIOQ_Eng' target='_blank'><GrYoutube /></a>
        </div>

        <div className='uswapp-mobile-apps'>
          <h4>
            Mobile Apps
            <span><FaMobileScreenButton /></span>
          </h4>
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
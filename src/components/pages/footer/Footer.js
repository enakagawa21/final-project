import React from 'react';
import './Footer.css';


import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          As I enhance my skills as a developer I will add to and change this site often.  
        </p>
        <p className='footer-subscription-text'>
          Thank You for taking the time to view my site.
        </p>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <a href='/' className='social-logo'>
            <img src="./images/nakagawa.svg" alt="E-logo" className="navbar-icon" />
            </a>
          </div>
          <small className='website-rights'>E . NAKAGAWA © 2022</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              to='https://www.linkedin.com/in/enakagawa21/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
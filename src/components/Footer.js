import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom'; 

export default function Footer(){
  return (
   <section className='social-media' id="socials">
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Ramen
            </Link>
          </div>
          <small className='website-rights'>© Ramen 2020, Egypt</small>

          <div className='social-icons'>
            
              <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>

             <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>

             <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>

          </div>
        </div>
      </section>
  )
 };
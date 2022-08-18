// images
import Logo from '../assets/logo-light.svg';
import Location from '../assets/icon-location.svg';
import Phone from '../assets/icon-phone.svg';
import Mail from '../assets/icon-email.svg';
import FaceBook from '../assets/facebook-f-brands.svg';
import Twitter from '../assets/twitter-brands.svg';
import Instagram from '../assets/instagram-brands.svg';


const Footer = () => {

  let url='#'

  return (
    <footer className='footer'>
      <div className='footer__card'>
        <p className='footer__card-text poppins w-600 center dark-cyan'>
          Ready To Build Your Community?
        </p>
        <button
          type='button'
          className='footer__card__btn footer__btn-text open-sans w-700 center white'>
            Get Started For Free
        </button>
      </div>

      <div className='footer__content'>
        <div className='footer__img-container'>
          <img
            className='footer__img'
            src={Logo}
            alt='logo' />
        </div>

        <div className='d-flex-row'>
          <div className='footer__info'>
            <div className='footer__info--container'>
              <div className='container-img'>
                <img
                  src={Location}
                  alt='Icon location' />
              </div>
              <p className='footer-text open-sans w-400 white'>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className='footer__info--container'>
              <div className='container-img'>
                <img
                  src={Phone}
                  alt='Icon phone' />
              </div>
              <p className='footer-text open-sans w-400 white'>
                +1-543-123-4567
              </p>
            </div>
            <div className='footer__info--container'>
              <div className='container-img'>
                <img
                  src={Mail}
                  alt='Icon mail' />
              </div>
              <p className='footer-text open-sans w-400 white'>
                example@fylo.com
              </p>
            </div>
          </div>
          
          <div className='footer__links'>
            <a href={url} className='footer__links--link footer-text open-sans w-400 white'>About Us</a>
            <a href={url} className='footer__links--link footer-text open-sans w-400 white'>What We Do</a>
            <a href={url} className='footer__links--link footer-text open-sans w-400 white'>FAQ</a>
            <a href={url} className='footer__links--link footer-text open-sans w-400 white'>Career</a>
            <a href={url} className='footer__links--link footer-text open-sans w-400 white'>Blog</a>
            <a href={url} className='footer__links--link footer-text open-sans w-400 white'>Contact Us</a>
          </div>

          <div className='footer__social'>
            <div className='footer__social-links'>
              <div className='container flex-center'>
                <img 
                  src={FaceBook}
                  alt='facebook icon'
                  className='fb' />
              </div>
              <div className='container flex-center'>
                <img 
                  src={Twitter}
                  alt='twitter icon'
                  className='tw' />
              </div>
              <div className='container flex-center'>
                <img 
                  src={Instagram}
                  alt='instagram icon'
                  className='ig' />
              </div>
            </div>
            <p className='copyright-text poppins w-400 white center'>
              © Copyright 2018 Huddle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
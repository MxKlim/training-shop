import {BsFacebook, BsTwitter, BsPinterest, BsTelephoneFill, BsFillClockFill} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import './styles/style.scss';
import i1 from './assets/Stripe_x42.png';
import i2 from './assets/AES256_x42.png';
import i3 from './assets/paypal_2_x42.png';
import i4 from './assets/mastercard_x42.png';
import i5 from './assets/discover_x42.png';
import i6 from './assets/american-express_x42.png';
import i7 from './assets/visa_x42.png';
import map from './assets/map.png';
import phone from './assets/phone.png';
import mail from './assets/mail.png';
import clock from './assets/clock.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-title">be in touch with us:</div>
        <form className='footer-form'>
          <input type="text" placeholder="Enter your email"/>
          <button className='btn-footer'>Join Us</button>
        </form>
        <ul className="footer-networks">
          <li className="footer-networks__item">
            <a href="#"><BsFacebook/></a>
          </li>
          <li className="footer-networks__item">
          <a href="#"><BsTwitter/></a>
          </li>
          <li className="footer-networks__item">
            <a href="#"><RiInstagramFill/></a>
          </li>
          <li className="footer-networks__item">
            <a href="#"><BsPinterest/></a> 
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <ul className="navigations">
          <li className="navigations__item">
            Categories
          </li >
          <li className="navigations__item">
            <a href="#"> Men</a>
          </li>
          <li className="navigations__item">
            <a href="#">Women</a>
          </li>
          <li className="navigations__item">
            <a href="#">Accessories</a>
          </li>
          <li className="navigations__item">
            <a href="#">Beauty</a>
          </li>
        </ul>
        <ul className='information'>
          <li className="navigations__item">
            Infomation
          </li >
          <li className="navigations__item">
            <a href="#"> About Us </a>
          </li>
          <li className="navigations__item">
            <a href="#">Contact Us</a>
          </li>
          <li className="navigations__item">
            <a href="#">Blog</a>
          </li>
          <li className="navigations__item">
            <a href="#">FAQs</a>
          </li>
        </ul>
        <ul className='information'>
          <li className="navigations__item">
            Useful links
          </li >
          <li className="navigations__item">
            <a href="#"> Terms & Conditions </a>
          </li>
          <li className="navigations__item">
            <a href="#">Returns & Exchanges</a>
          </li>
          <li className="navigations__item">
            <a href="#">Shipping & Delivery</a>
          </li>
          <li className="navigations__item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <ul className='contacts'>
          <li className="navigations__item">
            Contacts us
          </li >
          <li className="navigations__item">
            <img src={map} alt="" />
            <a href="#"> Belarus, Gomel, Lange 17 </a>
          </li>
          <li className="navigations__item">
            <img src={phone} alt="" />
            <a href="#">+375 29 100 20 30</a>
          </li>
          <li className="navigations__item">
            <img src={clock} alt="" />
            <a href="#">All week 24/7</a>
          </li>
          <li className="navigations__item">
            <img src={mail} alt="" />
            <a href="#">info@clevertec.ru</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2032 all rights reserved</p>
        <ul className="footer-img">
          <li className="footer-img__item"><img src={i1} alt="" /></li>
          <li className="footer-img__item"><img src={i2} alt="" /></li>
          <li className="footer-img__item"><img src={i3} alt="" /></li>
          <li className="footer-img__item"><img src={i4} alt="" /></li>
          <li className="footer-img__item"><img src={i5} alt="" /></li>
          <li className="footer-img__item"><img src={i6} alt="" /></li>
          <li className="footer-img__item"><img src={i7} alt="" /></li>
        </ul>
        <div className="cla">
          <a href="#">Clevertec.ru/training</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
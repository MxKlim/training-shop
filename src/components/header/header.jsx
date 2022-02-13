import React from "react";
import srcW from './assets/Vector.png';
import srcC from './assets/cardt.svg';
import srcU from './assets/user.png';
import srcS from './assets/search.png';
import {BsTelephoneFill, BsFillClockFill, BsFacebook, BsTwitter, BsPinterest} from 'react-icons/bs';
import {MdRoom} from 'react-icons/md';
import {RiInstagramFill} from 'react-icons/ri';
import './styles/style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <ul className="address">
          <li className="address-item">
            <BsTelephoneFill/>
            +375 29 100 20 30
          </li>
          <li className="address-item">
            <MdRoom/>
            Belarus, Gomel, Lange 17
          </li>
          <li className="address-item">
            <BsFillClockFill/>
            All week 24/7
          </li>
        </ul>
        <ul className="social-networks">
          <li className="social-networks__item">
            <a href="#"><BsFacebook/></a>
          </li>
          <li className="social-networks__item">
          <a href="#"><BsTwitter/></a>
          </li>
          <li className="social-networks__item">
            <a href="#"><RiInstagramFill/></a>
          </li>
          <li className="social-networks__item">
            <a href="#"><BsPinterest/></a> 
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <h1 className="logo"><a href="/">CleverShop</a></h1>
        <nav>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a href="#">About Us</a>
            </li>
            <li className="navigation-list__item">
              <a href="#">Women</a>
            </li>
            <li className="navigation-list__item">
              <a href="#">Men</a>
            </li>
            <li className="navigation-list__item">
              <a href="#">Beauty</a>
            </li>
            <li className="navigation-list__item">
              <a href="#">Accessories</a>
            </li>
            <li className="navigation-list__item">
              <a href="#">Blog</a>
            </li>
            <li className="navigation-list__item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <ul className="controls-panel">
          <li className="controls-panel__item">
            <img src={srcS} alt="" />
          </li>
          <li className="controls-panel__item">
            <img src={srcW} alt="" />
          </li>
          <li className="controls-panel__item">
            <a href="#">
              <img src={srcU} alt="" />
            </a>
          </li>
          <li className="controls-panel__item">
            <a href="#">
              <img src={srcC} alt="" />
              <span>3</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
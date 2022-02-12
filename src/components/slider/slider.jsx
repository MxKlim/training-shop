import imgSl from './assets/img-slider.jpg';
import imgB1 from './assets/block.jpg';
import imgB2 from './assets/block2.jpg';
import imgB3 from './assets/block3.jpg';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import './styles/style.scss';

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div className="slider-img">
          <img src={imgSl} alt="" />
        </div>
        <div className="slider-banner">
          <p>Banner</p>
          <h2>your Title text</h2>
        </div>
        <div className="slider-buttons">
          <button>
            <BsChevronLeft/>
          </button>
          <button>
            <BsChevronRight/>
          </button>
        </div>
      </div>
      <ul className="slider-preview">
        <li className="slider-preview__item">
          <img src={imgB1} alt="" />
          <div className="banner-mini">
            <h3 className="banner-mini__title">Women</h3>
          </div>
        </li>
        <li className="slider-preview__item">
          <img src={imgB2} alt="" />
          <div className="banner-mini">
            <h3 className="banner-mini__title">Men</h3>
          </div>
        </li>
        <li className="slider-preview__item">
          <img src={imgB3} alt="" />
          <div className="item-long">
            <h3 className="banner-mini__title">Accessories</h3>
          </div>
        </li>
      </ul>
    </div>
    
  )
}
export default Slider
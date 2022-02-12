import './styles/style.scss';
import Track from './assets/truck1.png';
import Refresh from './assets/refresh1.png';
import Support from './assets/support1.png'
const Advantage = () => {
  return (
    <div className="advantage">
      <div className="advantage__item">
        <img src={Track} alt="" />
        <div className="advantage-img">
          <h4>FREE SHIPPING</h4>
          <p>On all UA order or order above $100</p>
        </div>
      </div>
      <div className="advantage__item">
        <img src={Refresh} alt="" />
        <div className="advantage-img">
          <h4>30 DAYS RETURN</h4>
          <p>Simply return it within 30 days for an exchange</p>
        </div>
      </div>
      <div className="advantage__item">
        <img src={Support} alt="" />
        <div className="advantage-img">
          <h4>SUPPORT 24/7</h4>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
    </div>
  )
}
export default Advantage
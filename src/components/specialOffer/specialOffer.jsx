import './styles/style.scss';
import src1 from './assets/1.png';
import src2 from './assets/2.png';
const Offer = () => {
  return (
    <div className="offer-wrapper">
      <div className="block-img img-bottom">
        <img src={src1} alt="" />
      </div>
      <div className="offer-content">
        <div className="offer-banner">
          <p>Special Offer</p>
          <h2>
            <span>Subscribe</span> <span>And <span className='text-red'>Get 10% Off</span> </span>
          </h2>
          <form className='offer-form'>
            <div>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div>
              <button type='submit' className='btn-offer'>Subscribe</button> 
            </div>
          </form>
        </div>
      </div>
      <div className="block-img">
        <img src={src2} alt="" />
      </div>
    </div>
  )
}
export default Offer
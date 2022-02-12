import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import './styles/style.scss';

const Collection = () => {
  return (
    <div className="collection-wrapper">
      <div className="collection-block">
        <div className="banner">
          <p>New Season</p>
          <h2>lookbook collection</h2>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="sale-block">
        <div className="banner">
          <p>Sale</p>
          <h2>Get UP to <span>50% off</span></h2>
        </div>
        <img src={img2} alt="" />
      </div>
     
    </div>
  )
} 
export default Collection
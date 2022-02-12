import star from './assets/star.png';


const Card = (props) => {
  const {src, title, price, discount, countStar = 0 } = props;
  const mapArr = new Array (countStar).fill(0);
  return (
    <div className="card">
      <div className="card-img">
        <img src={src} alt={title} />
        {discount ? <span >{discount}%</span> : null}
      </div>
      <p className="card-title">{title}</p>
      <div className="price">
        <p className="price-total">{price}</p>
        <div className="card-like">
         { mapArr.map(() => <img src={star} alt="" />)}
        </div>
      </div>
    </div>
  )
}
export default Card
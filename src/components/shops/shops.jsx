import './styles/style.scss';
import s from './assets/Rectangle.jpg';
import s1 from './assets/Rectangle1.jpg';
import s2 from './assets/Rectangle2.jpg';
import s3 from './assets/Rectangle3.jpg';
import s4 from './assets/Rectangle4.jpg';
import s5 from './assets/Rectangle5.jpg';
import s6 from './assets/Rectangle6.jpg';
import s7 from './assets/Rectangle7.jpg';
import Card from './card';
const pr = [{src:s, discount: null, countStar: 3}, {src:s1, discount: null}, {src:s2, discount: null, countStar: 5}, {src:s3, discount: 30}, {src:s4, discount: null}, {src:s5, discount: null}, {src:s6, discount: 10}, {src:s7, discount: null}];
const Shop = (props) => {
  return (
    <div className="shop">
      <div className="shop-choice">
        <h2 className="shop__title">{props.title}</h2>
        <ul className="choice-list">
          <li className="choice__item">
            <button>
              new arrivals
            </button>
          </li>
          <li className="choice__item">
            <button>
              specials
            </button>
          </li>
          <li className="choice__item">
            <button>
              bestsellers
            </button>
          </li>
          <li className="choice__item">
            <button>
              most viewed
            </button>
          </li>
          <li className="choice__item">
           <button>
              featured products
            </button>
          </li>
        </ul>
      </div>
      <div className="card-place">
      {pr.map(item => {
        return (<Card
          src = {item.src}
          title={'Women\'s tracksuit Q109'}
          price={'$ 30.00'}
          discount={item.discount}
          countStar={item.countStar}
        />)
      })}
      
    
      </div>
    </div>
  )
}
export default Shop
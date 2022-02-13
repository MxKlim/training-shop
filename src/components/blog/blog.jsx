import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';
import './styles/style.scss';

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-header">
        <h2 className="blog-title">latest from blog</h2>
        <button className="btn-blog">see all</button>
      </div>
      <ul className="blog-list">
        <li className="blog-item">
          <img src={src1} alt="" />
          <div className="blog-banner">
            <h3>The Easiest Way to Break</h3>
            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
          </div>
        </li>
        <li className="blog-item">
          <img src={src2} alt="" />
          <div className="blog-banner">
            <h3>Wedding Season</h3>
            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
          </div>
        </li>
        <li className="blog-item">
          <img src={src3} alt="" />
          <div className="blog-banner">
            <h3>Recent Favorites On Repeat</h3>
            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Blog
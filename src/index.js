import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Advantage from './components/advantage/advantage';
import Shop from './components/shops/shops';
import ButtonAll from './components/buttonAll';
import Offer from './components/specialOffer/specialOffer';
import Blog from './components/blog/blog';
import Collection from './components/colection/collection';
import Footer from './components/footer/footer';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
  <div className='container'>
    <Header/>
    <div className="wrapper">
      <Slider/>
      <Advantage/>
      <Shop title={'women\'s'}/>
      <ButtonAll/>
      <Shop title={'men\'s'}/>
      <ButtonAll/>
      <Collection/>
      <Offer/>
      <Blog />
    </div>
    <Footer/>
  </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);



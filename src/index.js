import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Advantage from './components/advantage/advantage';
import Shop from './components/shops/shops';
import ButtonAll from './components/buttonAll';
import Collection from './components/colection/collection'
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
    </div>
  </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);



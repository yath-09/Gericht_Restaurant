import React from 'react';
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header'>
  <div className='app__header__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>
         The Key To fine Dinning
      </h1>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
      
    </div>
    
  </div>
  </div>
);

export default Header;

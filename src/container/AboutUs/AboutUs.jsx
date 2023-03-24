import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We’re  Gericht restaurants,where dinning experience  is prioritized, costs are minimized, and happiness are maximized.</p>
        <button type="button" className="custom__button"><a href='#contact'>Know More</a></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our journey began in Delhi two and a half years ago in 2020 with our brand, Gericht. That remarkable beginning gave us a springboard to grow and we now have 4 restaurants across India.</p>
        <button type="button" className="custom__button"><a href='#contact'>Know More</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
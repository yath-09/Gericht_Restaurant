import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Intro, Laurels, SpecialMenu} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Gallery />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <FindUs />
    <Footer />
  </div>
);

export default App;

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
          <SubHeading title="Contact" />
          <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find US</h1>
          <div className="app__wrapper-content">
              <p className="p__opensans">Prague, Old Town square</p>
              <p className="p__cormorant" style={{ color: '#DCCa87', margin: '2rem 0'}}>Opening Hours</p>
              <p className="p__opensans">Mon - Fri: 10:00 am - 23:00 pm</p>
              <p className="p__opensans">Sat - Sun: 12:00 am - 01:00 am</p>
          </div>
          <button className="custom__button" style={{marginTop: '2rem'}}>Visit US</button>
      </div>
      <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
      </div>
  </div>
);

export default FindUs;

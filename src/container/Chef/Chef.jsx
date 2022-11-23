import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
       <img src={images.chef} alt="chef"/>
      </div>
      <div className="app__wrapper_info">
          <SubHeading title="Chef's Word" />
          <h1 className="headtext__cormorant">What we believe in</h1>
          <div className="app__chef-contant">
              <div classname="app__chef-content-quote">
                  <img src={images.quote} alt="quote" />
                  <p className="p__opensans">In our restaurants you will feel what love is.</p>
              </div>
              <p className="p__opensans">Because this is not just a place where you can satisfy your hunger. This is a mechanism in which each gear works incredibly smoothly. Our customers come here not only to have a delicious meal, but also to enjoy this whole atmosphere. We really believe that we can make you a little happier. And next time you will come to us as to pleasant and old friends.</p>
          </div>
          <div className="app__chef-sign">
              <p>Kevin Luo</p>
              <p className="p__opensans">Chef & Founder</p>
              <img src={images.sign} alt="sign" />
          </div>
      </div>
  </div>
);

export default Chef;

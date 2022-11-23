import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
          <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
              <h1 className="headtext__cormorant">About Us</h1>
              <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">Over the years, we have strived to achieve the perfect combination of ingredients for our dishes. We have gone from a small family cafe to a world-class restaurant. And now you have the opportunity to taste delicious dishes from the best chefs in Europe.</p>
              <button type="button" className="custom__button">Know More</button>
          </div>

          <div className="app__aboutus-content_knife flex__center">
              <img src={images.knife} alt="about_knife"/>
          </div>

          <div className="app__aboutus-content_history">
              <h1 className="headtext__cormorant">Our History</h1>
              <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">The brand was  founded by my family members a long time ago in the small Spanish province of Toledo, not far from Madrid. We have retained the Spanish flavor and passion, but now we have many restaurants throughout Europe. So you have the opportunity to enjoy our dishes not only in our homeland.</p>
              <button type="button" className="custom__button">Know More</button>
          </div>

      </div>
  </div>
);

export default AboutUs;

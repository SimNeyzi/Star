import React from 'react';
import Feature from '../../components/feature/Feature'
import './whatStars.css';


const whatStars = () => {
  return(
    <div className="stars__whatstars section__margin" id="whatStars">
      <div className="stars__whatstars-feature">
        <div>
          <Feature title="How to name a star?" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
        </div>

      </div>
      <div className="stars__whatstars-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p>Explore the Stars</p>
      </div>
      <div className="stars__whatstars-container">
        <Feature title="Constellations" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Feature title="Supernova" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <Feature title= "Galaxy" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>
    </div>
  )
}

export default whatStars
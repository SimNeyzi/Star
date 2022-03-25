import React from 'react';
import './header.css';
// import sky2 from '../../assets/yellowStar.png'

const Header = () => {
  return(
    <div className="stars__header section__padding" id="home">
      <div className="stars__header-content">
        <h1 className="gradient__text">Open up the universe to others</h1>
        {/* <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> */}
        {/* <div className="stars__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div> */}
      </div>
      <div className="stars__header-image">
        {/* <img src={} alt="sky" /> */}
        <section className="starsInSky">
          <span></span>
          {/* <span></span> */}
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span> */}
        </section>

      </div>
    </div>
  )
}

export default Header
import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
  title: "Ut enim ad minim veniam",
  text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Ut enim ad minim veniam",
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]


const Features = () => {
  return(
    <div className="stars__features section_padding" id="features">
      <div className="stars__features-heading">
      <h1 className="gradient__text">How to name a star?</h1>
      <p>Request Early Access</p>
      </div>
      <div className="stars__features-container">
        {
          featuresData.map((item, index) => {
            return(
              <Feature title={item.title} text={item.text} key={item.title * index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Features;
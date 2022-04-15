import React from 'react';
import { Blog, Features, Footer, Possibility, Header } from './containers';
import { Accordian } from './components';
import { CTA } from './components';
import './App.css';

const App2 = () => {
  return (
    <div className="App2">
      <div>
      {/* <Header /> */}
      {/* <Features />
      <WhatStars />
      <Possibility />
      <CTA />
      <Blog />
      <Footer /> */}
      <Accordian />
      </div>
    </div>
  )
}

export default App2;
import React, { useState } from 'react';
import { Sidebar } from '../../components';
import { Navbar } from '../../components';
import { Hero } from '../../components';
import { Info } from '../../components';
import { homeObjOne } from '../../components/info/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    alert('Complete Cache Cleared')
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne} />
      <div style={{ height: 500, width: '80%' }}>
      <button onClick={() => clearCacheData()} >
        Clear Cache Data</button>
    </div>
    </div>
  )
}

export default Home;
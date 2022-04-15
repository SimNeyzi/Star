import React, { useState } from 'react';
import { Sidebar } from '../../components';
import { Navbar } from '../../components';
import { Hero } from '../../components';
import { Info } from '../../components';
// import { Accordian } from '../../components';
import { homeObjOne } from '../../components/info/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne} />
      {/* <Accordian /> */}
    </div>
  )
}

export default Home;
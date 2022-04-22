import React, { useState } from 'react';
import Video from '../../assets/video55.mp4'
import Image from '../../assets/formbg3.png'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../buttons/Button';

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return(
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        <ImageBg src={Image} alt="image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Open up the universe to others</HeroH1>
        <HeroP>
        Name a star and gift it to a loved one
        </HeroP>
        <HeroP>
          Based on cryptocurrency technology, where everyone can partcipate
        </HeroP>
        <HeroBtnWrapper>
          <Button
          to='formHeading'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          >
            Mint your star {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
import React, {Fragment} from 'react';
import { Button } from '../buttons/Button.jsx';
import image from './svg-2.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Subheading, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './InfoElements';

const Info = ({id, imgStart, topLine, headline, description, buttonLabel, img, alt}) => {

  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subheading>With Maya you can gift a star to a loved one.</Subheading>
                <Subtitle>{description}</Subtitle>
                <Subtitle>Our upcoming cryptocurrency allows for anyone to participate in the world's first decentralized star database.</Subtitle>
                <BtnWrap>
                  <Button to='home'>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={image} alt="gift"/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info;
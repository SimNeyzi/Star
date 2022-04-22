import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;

  // @media screen and (max-width: 768px) {
  //   padding: 100px 0;
  // }
`

export const InfoWrapper = styled.div`
  // display: grid;
  display: flex;
  z-index: 1;
  height: 100vh;
  width: 80%;

  // margin: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 0 12px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display:flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-temlate-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  // margin-bottom: 15px;
  // padding: 0 10px;
  grid-area: col1;
`

export const Column2 = styled.div`
  // margin-bottom: 15px;
  // padding: 0 10px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  // max-width: 540px;
  padding-top: 0;
  padding-bottom: 15px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size:32px;
  }
`

export const Subheading = styled.p`
  font-size: 28px;
  // line-height: 24px;
`

export const Subtitle = styled.p`
  // max-width: 440px;
  margin-bottom: 15px;
  font-size: 20px;
  // line-height: 24px;
  // border: 2px solid red;
  padding-top: 8px;
  margin-right: 25px;
`

export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  width: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
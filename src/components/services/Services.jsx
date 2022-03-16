import React from 'react';
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
  return(
    <ServicesContainer id='services'>
      <ServicesH1>Options</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Silvernova</ServicesH2>
          {/* <ServicesP>Test test tes tes tes test test</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Supernova</ServicesH2>
          {/* <ServicesP>Test test tes tes tes test test</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Duonova</ServicesH2>
          {/* <ServicesP>Test test tes tes tes test test</ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>


  )
}

export default Services
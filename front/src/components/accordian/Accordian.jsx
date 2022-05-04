import React, { useState } from 'react';
import { Data } from './FaqData';
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordianSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  height: 100vh;
  width: 80%;
`

const Container = styled.div`
  position: absolute;
  width: 85%;
  top: 15%;
  bottom: 15%;
  height: auto;
  margin: auto;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(59,59,203,1) 200%);
  border-radius: 30px;
  // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`

const Wrap = styled.div`

  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;


  .question {
    padding: 2rem;
    font-size: 1.5rem;
  }

  #iconSpan {
    margin-right: 1.5rem;
    margin-top: 1.5rem;
  }
`

const Dropdown = styled.div`
  background: #031b34;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  border-bottom: 1px solid #f45216;
  border-top: 1px solid #f45216;

  .answer{
    padding: 2rem;
    font-size:1.2rem;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  width: 70%;
  margin: auto;
  margin-top: 6rem;
  margin-bottom: 0;
  font-size: 2.5rem;
  box-sizing: border-box;
`

const Accordian = () => {
  const [clicked, setClicked] = useState(false);

  const toggleIcon = index => {
    if(clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }



  return(

    <IconContext.Provider value = {{ color: '#f45216', size: '25px'}}>
      <Heading>Frequently Asked Questions</Heading>
      <AccordianSection id="faq">
        <Container>
          {Data.map((item, index) => {
            return(
              <div key={index}>
                <Wrap onClick={() => toggleIcon(index)}>
                  <p className="question">{item.question}</p>
                  <span id="iconSpan">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ?
                  (<Dropdown>
                    <p className="answer">{item.answer}</p>
                  </Dropdown>) : null}
              </div>
            )
          })}
        </Container>
      </AccordianSection>
    </IconContext.Provider>
  )
}

export default Accordian;
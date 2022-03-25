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
  width: 80%;
  top: 15%;
  bottom: 15%;
  margin: auto;
  // border: 2px solid #f45216;
  // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`

const Wrap = styled.div`
  background: #031b34;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  .question {
    padding: 2rem;
    font-size: 1.5rem;
  }

  #iconSpan {
    margin-right: 1.5rem;
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
      <AccordianSection id="faq">
        <Container>
          {Data.map((item, index) => {
            return(
              <>
                <Wrap onClick={() => toggleIcon(index)} key={index}>
                  <p class="question">{item.question}</p>
                  <span id="iconSpan">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ?
                  (<Dropdown>
                    <p class="answer">{item.answer}</p>
                  </Dropdown>) : null}
              </>
            )
          })}
        </Container>
      </AccordianSection>
    </IconContext.Provider>
  )
}

export default Accordian;
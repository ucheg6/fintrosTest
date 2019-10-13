import React from 'react'
import styled from 'styled-components'

const BannerComponent = () => {
  return (
    <Section>
      <Aside>
        <h3>MONEY DIARIES</h3>
        <a href="#">Life Among America’s Four-Wheeled Nomads</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim
          expedita vel dolore. Ea harum reiciendis doloribus consequuntur,
          ratione, voluptatem maiores omnis et tenetur corrupti cumque. Eligendi
          harum perferendis vel?
        </p>
      </Aside>
    </Section>
  )
}

const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: 600px;
  background-image: url('https://wealthsimple-grow.ghost.io/content/images/2019/10/van_final_color--1--1.jpg');
  background-size: cover;
  padding: 0 3em;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 250px;
    padding-bottom: 0;
  }
`

const Aside = styled.aside`
  position: absolute;
  right: 0;
  bottom: 60px;
  margin: 0;
  width: 560px;
  background-color: #fff;
  opacity: 0.8;
  padding: 1em 2em;
  h3 {
    font-size: 0.9em;
    font-weight: 600;
    color: #999;
    letter-spacing: 2px;
  }
  a {
    font-size: 1.4em;
    color: #000;
    font-weight: bolder;
  }
  p {
    line-height: 2em;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    right: 0;
    bottom: -370px;
    margin: 0;
    width: 100%;
    padding: 1em 2em;
  }
`
export default BannerComponent

import React from 'react'
import styled from 'styled-components'

const HeaderComponent = () => {
  const links = [
    'All Stories',
    'Money Diaries',
    'How To',
    'News',
    'Data',
    'Ask Wealthsimple',
    'Dear Ms. Etiquette'
  ]

  return (
    <Section>
      <H1>Wealthsimple</H1>
      <H1>Magazine</H1>
      <P>STORIES AND IDEAS FROM WEALTHSIMPLE</P>
      <Ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href="#">{link}</a>
          </li>
        ))}
      </Ul>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10em 8em;
  padding-bottom: 5em;
  align-items: center;
  @media (max-width: 768px) {
    padding: 4em 2em;
  }
`
const H1 = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 5em;
  margin: 0;
  &:first-of-type {
    font-size: 2em;
  }
  line-height: 1.2em;
  &:first-of-type {
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const P = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  color: #999;
  letter-spacing: 0.2em;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`
const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 6em 0 0 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
  li {
    align-self: center;
    margin: 0 1.2em;
    position: relative;
    text-align: center;
    color: #999;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &:before {
      content: '';
      background: #999;
      border-radius: 100%;
      display: block;
      height: 2px;
      position: absolute;
      left: -20px;
      top: 50%;
      width: 2px;
    }
    &:first-of-type {
      color: black;
      &:before {
        content: none;
      }
    }
  }
`
export default HeaderComponent

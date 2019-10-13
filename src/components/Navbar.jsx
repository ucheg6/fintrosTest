import React from 'react'
import styled from 'styled-components'

const NavbarComponent = () => {
  return (
    <Navbar>
      <Logo href="/">Wealthsimple</Logo>

      <div>
        <MenuLinks href="#">The Details</MenuLinks>
        <MenuLinks href="#">Magazine</MenuLinks>
        <MenuLinks href="#">Sign In</MenuLinks>
        <MenuLinks href="#">Start Investing</MenuLinks>
      </div>
    </Navbar>
  )
}

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 8em;
  height: 90px;
  background-color: #fff;
`

const Logo = styled.a`
  font-family: 'DM Serif Display', serif;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  color: #333;
`

const MenuLinks = styled.a`
  text-decoration: none;
  color: #888;
  padding: 0.5em 1em;
  &:hover {
    color: #333;
  }
  &:last-of-type {
    background-color: #ffb21a;
    color: #fff;
    border-radius: 50px;
    padding: 0.8em 1em;
    &:hover {
      background-color: #faa600;
    }
  }
  &:nth-of-type(2) {
    color: #000;
  }
`

export default NavbarComponent

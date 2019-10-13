import React from 'react'
import styled from 'styled-components'
import isMobile from '../isMobile'

const mobileHeader =
  'https://www.wealthsimple.com/assets/magazine/images/header/logo_small-6dccf727ddc595c19f73cecef3069936.svg'
const NavbarComponent = () => {
  return (
    <Navbar>
      <div className="nav-mobile">
        <img src={mobileHeader} className="img-height" />
        <NavbarBurger
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </NavbarBurger>
      </div>
      <Logo href="/">Wealthsimple</Logo>

      <div className="menulinks">
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
  .nav-mobile {
    display: none;
    flex-grow: 10;
    .img-height {
      height: 3em;
      padding-left: 0.5em;
    }
  }

  @media (max-width: 888px) {
    padding: 0.5em 3em;
  }

  @media (max-width: 768px) {
    padding: 0.5em 1em;

    .nav-mobile {
      display: flex;
    }
    .menulinks {
      display: none;
    }
  }
`

const Logo = styled.a`
  font-family: 'DM Serif Display', serif;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  color: #333;
  @media (max-width: 768px) {
    display: none;
  }
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
const NavbarBurger = styled.nav`
  cursor: pointer;
  display: block;
  height: 3rem;
  position: relative;
  width: 3rem;
  margin-left: auto;
  border-radius: 50%;
  background-color: #fab131;
  span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 10px);
    position: absolute;
    -webkit-transform-origin: center;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, -webkit-transform;
    transition-property: background-color, opacity, transform;
    transition-property: background-color, opacity, transform, -webkit-transform;
    transition-timing-function: ease-out;
    color: #fff;
    width: 20px;
    &:nth-child(2) {
      top: calc(50% - 4px);
    }
    &:nth-child(1) {
      top: calc(50% - 6px);
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
    }

    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }
`
export default NavbarComponent

import React from 'react'
import styled from 'styled-components'
import IconFB from './icons/fb.png'
import IconIG from './icons/ig.png'
import IconTW from './icons/tw.png'

const FooterComponent = () => {
  return (
    <Footer>
      <FooterSection>
        <FooterUl>
          <FooterLi>About us</FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/who-we-are">
              Who we are
            </a>
          </FooterLi>
        </FooterUl>
        <FooterUl>
          <FooterLi className="white">Learn more</FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/details">The Details</a>
          </FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/investing-101">
              Investing 101
            </a>
          </FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/socially-responsible-investing">
              Responsible investing
            </a>
          </FooterLi>

          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/halal-investing">
              Halal investing
            </a>
          </FooterLi>

          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/black">
              Wealthsimple Black
            </a>
          </FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/magazine">Magazine</a>
          </FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/portfolio-review">
              Financial Portfolio Review
            </a>
          </FooterLi>
        </FooterUl>

        <FooterUl>
          <FooterLi>Legal</FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/legal/terms">
              Terms of use
            </a>
          </FooterLi>
          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/legal/privacy">
              Privacy policy
            </a>
          </FooterLi>

          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/legal/disclosure">
              Full disclosure
            </a>
          </FooterLi>

          <FooterLi>
            <a href="https://www.wealthsimple.com/en-ca/legal/file-complaint">
              File a complaint
            </a>
          </FooterLi>
        </FooterUl>

        <FooterUl>
          <FooterLi>Download the App</FooterLi>
          <div className="icons">
            <FooterLi>
              <img
                className="icon active"
                alt="iOS"
                src="https://www.wealthsimple.com/assets/magazine/images/modules/icon-apple-340ef8dfa3d4bdcf4acea8543efa41c3.svg"
              />
            </FooterLi>
            <FooterLi>
              <img
                className="icon active"
                alt="Android"
                src="https://www.wealthsimple.com/assets/magazine/images/modules/icon-android-0751af4a45e9b35492de887995ad195e.svg"
              />
            </FooterLi>
          </div>
        </FooterUl>
      </FooterSection>

      <Divider />

      <FooterSection>
        <FooterUl>
          <FooterLi>Questions?</FooterLi>
          <FooterLi>
            <a href="https://help.wealthsimple.com/hc/en-ca/">Support centre</a>
          </FooterLi>
        </FooterUl>

        <div className="footer-list-wrapper">
          <FooterUl className="footer-list footer-list-with-active">
            <FooterLi>Language</FooterLi>
            <FooterLi>
              <a href="#" className="active footer-link">
                English
              </a>
            </FooterLi>
            <FooterLi>
              <a href="#" className="transparent-5">
                Français
              </a>
            </FooterLi>
          </FooterUl>
        </div>
        <div className="footer-list-wrapper">
          <FooterUl className="footer-list footer-list-with-active">
            <FooterLi>Country</FooterLi>
            <div className="icons">
              <FooterLi>
                <img
                  className="icon"
                  src="https://www.wealthsimple.com/assets/magazine/images/modules/flag-gb-5f3786a92af2d6cdad8181b8260e2133.svg"
                />
              </FooterLi>
              <FooterLi>
                <img
                  className="icon"
                  src="https://www.wealthsimple.com/assets/magazine/images/modules/flag-us-5f7e923603397e8ae67074e9891d6575.svg"
                />
              </FooterLi>
              <FooterLi>
                <img
                  className="icon active"
                  src="https://www.wealthsimple.com/assets/magazine/images/modules/flag-canada-a9a930599887ad178880cdd48396163b.svg"
                />
              </FooterLi>
            </div>
          </FooterUl>
        </div>
        <FooterUl>
          <FooterLi>Social</FooterLi>
          <div className="icons">
            <FooterLi>
              <img className="icon active" alt="Facebook Icon" src={IconFB} />
            </FooterLi>
            <FooterLi>
              <img className="icon active" alt="Twitter Icon" src={IconTW} />
            </FooterLi>
            <FooterLi>
              <img className="icon active" alt="Instagram Icon" src={IconIG} />
            </FooterLi>
          </div>
        </FooterUl>
      </FooterSection>

      <FooterEnd>
        <a className="bottom-links" href="#">
          Wealthsimple for Advisors
        </a>

        <a className="bottom-links" href="#">
          Wealthsimple for Work
        </a>

        <p>
          <strong>
            By using this website, you accept our{' '}
            <a href="#">{'Terms of Use'}</a>
            {' and '}
            <a href="#">{'Privacy Policy'}</a>. Copyright 2019 Wealthsimple
            Technologies Inc.
          </strong>
        </p>
      </FooterEnd>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #222;
  color: #fff;
  padding: 0 7.6em 4em 7.6em;

  .icons {
    display: flex;

    .icon {
      display: inline-block;
      height: 40px;
      width: 40px;
      margin-right: 0.5em;
      opacity: 0.5;

      &.active {
        opacity: 1;
      }
    }
  }

  .transparent-5 {
    opacity: 0.5;
  }
`

const FooterSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 4em 0;
`

const FooterUl = styled.ul`
  vertical-align: top;
  list-style: none;
  margin: 0;
  padding: 0;
`

const FooterLi = styled.li`
  &:first-of-type {
    font-weight: bold;
    margin-bottom: 1.8em;
  }

  a {
    font-size: 1.1em;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    transition: opacity 60ms linear;
    &:hover {
      opacity: 0.7;
    }
  }
`

const Divider = styled.div`
  border: 1px solid #202020;
  height: 1px;
`

const FooterEnd = styled.div`
  .bottom-links {
    color: #fff;
    text-decoration: none;
    transition: opacity 60ms linear;
    position: relative;
    &:hover {
      opacity: 0.7;
    }
    &:first-of-type {
      margin-right: 25px;
      &::after {
        content: '';
        background: #fff;
        border-radius: 100%;
        display: inline-block;
        height: 2px;
        position: absolute;
        right: -1em;
        top: 50%;
        width: 2px;
      }
    }
  }

  p {
    font-size: 0.8em;
    color: #999;

    strong {
      color: inherit;

      a {
        color: inherit;
      }
    }
  }
`

export default FooterComponent

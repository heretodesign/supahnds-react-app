import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import logo from '../../../img/supa.png'


const NavbarHero = () => {

  return (
    <>
      <section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav">
            <div className="container grid">
                <div className="firstsection">
                    <p className="subtitle is-6 has-text-white isdata">A handpicked, expertly managed workforce</p>
                 </div>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://www.supahands.com/">
                  <img src={logo} className="nav-logo" width="200" height="150" alt="Supahands logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <span>Solutions</span>
                  </a>
                  <a className="navbar-item">
                    <span>How it works</span>
                  </a>
                  <a className="navbar-item">
                    <span>Product suite</span>
                  </a>
                  <a className="navbar-item">
                    <span>Company</span>
                  </a>
                  <a className="navbar-item">
                    <strong>Contant Us</strong>
                  </a>
                  {/*<span className="navbar-item">
                  <a className="button is-info" id="navBtn">
                    Test now
                  </a>
                  </span>*/}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstsection">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <h1 className="title is-1 has-text-left has-text-weight-light" id="mainBlack">
                      Preparing <span className="has-text-primary"> clean and <br />accurate</span> datasets for <br /> Machine Learning
                    </h1>
                  </div>
                  <div className="column"></div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="has-text-left">
                      Automated distribution of microtasks to a curated human intelligence workforce for quality results at scale
                     </p>
                  </div>
                  <div className="column"></div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <a className="button is-large is-info has-test-small is-fullwidth" id="landBtn">Set up a free trial</a>
                  </div>
                  <div className="column"></div>
                </div>

              </div>

           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavbarHero;

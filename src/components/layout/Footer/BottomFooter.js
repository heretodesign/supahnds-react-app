import React, { Component } from 'react'
import { columns, column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import logo1 from '../../../img/supa.png'
import umaiinsta from '../../../img/insta.svg'
import umailinked from '../../../img/linked.svg'

const BottomFooter = () => {

  return (
      <footer className="section footer-btm">
          <div className="container content has-text-centered">
              <div className="columns">
                <div className="column is-3">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">SupaHands</h1>
                      <div className="content">
                        <div className="subtitle is-5 has-text-grey">
                          <div className="has-text-left has-text-weight-light">
                              <p className="has-text-left" id="mainFooter">Get in touch</p>
                              <p className="has-text-left" id="mainFooter">Resources: Blog</p>
                              <p className="has-text-left" id="mainFooter">Legal</p>
                              <p className="has-text-left" id="mainFooter">Privacy Policy</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Solutions</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Image annotation</p>
                                    <p className="has-text-left" id="mainFooter">Tagging & categorization</p>
                                    <p className="has-text-left" id="mainFooter">Data transcription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Our promise</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Quality assurance</p>
                                    <p className="has-text-left" id="mainFooter">Data security</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Who are we?</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">About us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">One of Us</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Careers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <section className="section">
              <div className="container">
                  <div className="content">
                    <hr className="hr-footer" />
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                <div className="columns">
                <div className="column is-one-quarter">
                  <div className="content">
                      <div className="subtitle is-5 has-text-white">
                          <p className="has-text-left has-text-weight-light has-text-grey">
                              <a className="navbar-item" href="https://freighthub.com/en/">
                                <img src={logo1} className="nav-logo" width="200" height="150" alt="umai" />
                              </a>
                          </p>
                      </div>
                  </div>
                </div>
                  <div className="column is-one-quarter">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-left has-text-weight-light has-text-grey">
                                <a href="#" className="has-text-right has-text-grey" id="mainFooter">© 2019 SupaHands. All rights reserved.</a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </footer>
  );
}

export default BottomFooter;

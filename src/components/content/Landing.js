import React, { Component } from 'react'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


const Landing = () => {

  return (
    <>
      <section className="section is-paddingless-horizontal imgLanding">
          <div className="container grid is-large">
              <div className="firstsection">
                  <div className="content">
                    <br />
                    <br />
                    <br />
                    <h2 className="title is-3 has-text-left has-text-weight-light" id="mainBlack">When you’re choosing car insurance it’s important you have the facts <br />  <br /> so you can make an informed decision.
                    </h2>
                  </div>
                  <div className="content" id="landingForm">
                    <div className="columns">
                      <div className="column is-one-third">
                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="text" id="landBtn" placeholder="Email Address" />
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <a className="button is-large is-info is-fullwidth" id="landBtn">STAY TUNED</a>
                      </div>
                      <div className="column"></div>
                    </div>

                  </div>

               </div>
          </div>
      </section>
    </>
  );
}

export default Landing;

import React from 'react'
import axios from 'axios'
import { Button, Columns, Column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Image from "react-graceful-image"
import Flickr from '../Flickr-1.4s-200px.svg'


class ViewPage extends React.Component {
  state = {
    content: [],
    isLoading: true,
    newName: '',
    addNewName: [],
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/shipments/${this.props.match.params.id}`)
    .then(result => {
      console.log(result.data)
      this.setState({
        content: result.data,
        isLoading: false,
      })
    })
  }

  addName = (e) => {
    e.preventDefault();
    console.log(this.state.newName)
    axios.patch(`http://localhost:3000/shipments/${this.props.match.params.id}`,
      {
        name: this.state.newName
      }
    )
    .then(response => {
      console.log(response)
        this.setState({
          newName: '',
        })
    })
    .catch(err => console.log(err))
    let copyArray = [...this.state.addNewName]
    copyArray.push(this.state.newName)
    this.setState({addNewName: copyArray})
  }


  handleChange = (e) => {
    this.setState({newName: e.target.value})
  }

  render() {
    const { isLoading, content, newName } = this.state;
    return (
      <>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                    <div className="content">
                      <div className="columns is-mobile">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        <div class="box" id="boxContent">
                          {
                            !isLoading ? (
                              <>
                                <h1 className="title is-5 has-text-black" id="viewTitle">Name: {content.name}</h1>
                                 <br />
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Cargo: <br />Type: { content.cargo[0].type } | Description: { content.cargo[0].description } | Volume: { content.cargo[0].volume }</p>
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Mode: { content.mode }</p>
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Type: { content.type }</p>
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Destination: { content.destination } </p>
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Origin: { content.origin }</p>
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Total: { content.total }</p>
                                 <p className="subtitle is-5 has-text-grey" id="viewPara"> Status: { content.status }</p>
                                 <p className="subtitle is-5 has-text-grey" id="viewGenre">Services: { content.services[0].type }</p>
                              </>
                            )
                            : <>
                                <p className="text-center"><img className="display:inline;" src={Flickr} alt="Flickr" /></p>
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
          </section>
          <section className="section is-paddingless-horizontal">
            <div className="container grid is-large">
                <div className="firstsection">
                  <div className="content">
                    <div className="columns">
                     <div className="column is-three-fifths is-offset-one-fifth">
                        {this.state.addNewName.map((name) => {
                          return <h3 className="title" id="viewTitle">{name}</h3>
                        })}

                        <h3 id="viewTitle">New Name: {newName}</h3>
                     </div>
                    </div>
                    <form id="addName-form" onSubmit={e => this.addName(e)}>
                      <div className="columns">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        <h1 className="title" id="viewTitle">Update Name of Shipment</h1>
                          <div className="columns">
                            <div className="column">
                              <div className="field">
                                <div className="control">
                                  <input onChange={e => this.handleChange(e)} className="input is-info is-large" type="text" name="name" value={newName}  placeholder="..enter new Name" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column ">
                              <div className="field">
                                <div className="control">
                                  <button className="button is-large is-info is-fullwidth" type="submit" value="Submit"  id="updateName">Update Name</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
               </div>
            </div>
          </section>
      </>
    )
  }
}

export default ViewPage;

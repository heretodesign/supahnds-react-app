import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Columns, Column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
const paginate = require("paginate-array")


class ListPage extends React.Component {
    state = {
        agents: [],
        size: 15,
        page: 1,
        currPage: null,
        selectedAgents: [],
        filterData: [],
        isLoading: true,
        searchInput: ''
    }

    handleCheck = e => {
      // ticking
      if (e.target.checked) {
        this.setState({
          selectedAgents: [
            ...this.state.selectedAgents,
            e.target.value
          ]
        })
      } else {
        // unticking
        this.setState({
          selectedAgents: this.state.selectedAgents.filter(id => id != e.target.value)
        })

      }
    }

    componentDidMount() {
      axios.get('http://localhost:4444/api/agents')  //http://localhost:4444/api/agents
        .then(response => {
            console.log(response);
            let data = [...response.data]; //use spread operator to copy the res into a new array
            const { page, size } = this.state;
            const currPage = paginate(data, page, size);

            this.setState({
              ...this.state,
              data,
              currPage,
              isLoading: false
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    Pending = (agentId) => {
      axios.put(`http://localhost:4444/api/agents/${agentId}`)
      .then(response => {
        this.setState({
          agents: this.state.agents.filter(agent => agent._id != agentId)
        })
      })
      .catch(error => {
        alert('Cannnot Mark as Pending')
      })
    }

    Approved = (agentId) => {
      axios.put(`http://localhost:4444/api/agents/${agentId}`)
      .then(response => {
        this.setState({
          agents: this.state.agents.filter(agent => agent._id != agentId)
        })
      })
      .catch(error => {
        alert('Cannnot Mark as Pending')
      })
    }

    Rejected = (agentId) => {
      axios.put(`http://localhost:4444/api/agents/${agentId}`)
      .then(response => {
        this.setState({
          agents: this.state.agents.filter(agent => agent._id != agentId)
        })
      })
      .catch(error => {
        alert('Cannnot Mark as Pending')
      })
    }

    // searchFilter = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await fetch(`http://localhost:4444/api/agents`);
    //     const data = await response.json();
    //     console.log(data);
    //     this.setState({
    //       filterData: data
    //     });
    //     console.log(this.state.filterData)
    //   } catch (error) {
    //     console.log('ERROR: ', error)
    //   }
    // }

    searchFilter = (name) => {
      name.preventDefault();
      const lowercaseName = name.toLowerCase();
      const filterData = this.state.data.filter(e =>
        e.name.toLowerCase().indexOf(lowercaseName) >= 0
      );

      this.setState({ filterData });
    }

    // searchFilter = name => {
    //     const uppercaseName = name.toUpperCase();
    //     const filterData = this.state.data.filter(e =>
    //       e.name.toUpperCase().indexOf(uppercaseName) >= 0
    //     );
    //
    //     this.setState({
    //       filterData
    //     });
    //   }


    handleChange = (e) => {
      this.setState({
        searchInput: e.target.value
      })
    }

    previousPage = () => {
      const { currPage, page, size, data } = this.state;
      if (page > 1) {
        const newPage = page - 1;
        const newCurrPage = paginate(data, newPage, size);
        this.setState({
          ...this.state,
          page: newPage,
          currPage: newCurrPage
        });
      }
    }

    nextPage = () => {
      const { currPage, page, size, data } = this.state;
      if (page < currPage.totalPages) {
        const newPage = page + 1;
        const newCurrPage = paginate(data, newPage, size);
        this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
      }
    }


    render() {
      console.log(this.state.selectedAgents)
       const { page, size, currPage, searchInput, filterData, isLoading } = this.state;
        return (
          <div>
            <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                  <h1 className="title" id="viewTitle">Applicant Search</h1>
                    <div className="content">
                      <form id="addName-form" onSubmit={e => this.searchFilter(e)}>
                        <div className="columns" id="mainColumns">
                          <div className="column is-one-quarter">
                            <div className="field">
                              <div className="control">
                                <input
                                  onChange={e => this.handleChange(e)}
                                  className="input is-info is-medium"
                                  type="text"
                                  name="searchInput"
                                  value={this.state.searchInput || ""}
                                  placeholder="..search" />
                              </div>
                            </div>
                          </div>
                          <div className="column is-one-fifth">
                            <div className="field">
                              <div className="control">
                                <button
                                  className="button is-medium is-info is-fullwidth"
                                  type="submit"
                                  value="Submit">
                                  SEARCH
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                           <div className="column is-three-fifths is-offset-one-fifth">
                             {
                                filterData.map((applicant, index) =>
                                  <div className="is-size-5 has-text-left" id="empDiv" key={index}>
                                    {applicant.name} - {applicant.email} - {applicant.status} - {applicant.country}
                                  </div>)
                              }
                           </div>
                        </div>
                      </form>
                    </div>
                 </div>
              </div>
            </section>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large notification">
                    <div className="firstsection">
                      <h3 className="title is-6">Page: {page} && Size: {size}</h3>
                        <div className="content">
                          <div className="columns">
                            <div className="column" id="tablelisttask">
                              <div className="actionBtns">
                                <button onClick={() => {this.Pending()} } className="button is-primary">Pending</button> {' '}
                                <button onClick={() => {this.Approved()} } className="button is-info">Approved</button> {' '}
                                <button onClick={() => {this.Rejected()} } className="button is-danger">Rejected</button>
                              </div>
                              <br />
                              <table className="table is-mobile">
                                <thead>
                                  <tr>
                                    <th><abbr title="name" className="is-3">Name</abbr></th>
                                    <th><abbr title="email">Email</abbr></th>
                                    <th><abbr title="status">Status</abbr></th>
                                    <th><abbr title="country">Country</abbr></th>
                                    <th><abbr title="picture">Picture</abbr></th>
                                    <th><abbr title="action">Action</abbr></th>
                                  </tr>
                                </thead>
                                { currPage &&
                                  <tbody>
                                    {
                                      currPage.data.map(agent => (
                                        <tr className="is-5" key={agent._id}>
                                          <td className="is-6">{ agent.name }</td>
                                          <td className="is-5">{ agent.email}</td>
                                          <td className="is-5">{ agent.status }</td>
                                          <td className="is-5">{ agent.country }</td>
                                          <td className="is-5">
                                            <figure className="image is-48by48">
                                                <img
                                                    src={ agent.picture }
                                                    alt="Placeholder image"
                                                />
                                            </figure>
                                          </td>
                                          <td>
                                            <label className="checkbox">
                                              <input onChange={this.handleCheck} value={agent._id} type="checkbox" />
                                            </label>
                                          </td>
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                }
                              </table>
                              <div className="columns">
                                <div className="column is-2 has-text-centered">
                                  <button onClick={this.previousPage} className="button is-info">Previous Page</button>
                                </div>
                                <div className="column is-1">
                                  <button onClick={this.nextPage} className="button is-info">Next Page</button>
                                </div>
                              </div>
                             </div>
                          </div>
                        </div>
                     </div>
                </div>
            </section>
        </div>
    );
  }
}


export default ListPage

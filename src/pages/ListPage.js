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
        currPage: null
    }

    componentDidMount() {
      axios.get('./agent.json')
        .then(response => {
            console.log(response);
            let data = [...response.data]; //use spread operator to copy the res into a new array
            const { page, size } = this.state;
            const currPage = paginate(data, page, size);

            this.setState({
              ...this.state,
              data,
              currPage
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    previousPage = () => {
      const { currPage, page, size, data, AgentData } = this.state;
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
       const { page, size, currPage } = this.state;
        return (
          <div>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large notification">
                    <div className="firstsection">
                      <h3 className="title is-6">Page: {page} && Size: {size}</h3>
                        <div className="content">
                          <div className="columns">
                            <div className="column" id="tablelisttask">
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
                                          {/*<td className="is-5">
                                            <Link to={`/pages/viewpage/${shipment.id}`}>
                                              <button className="button is-info has-background-black-bis">View Detials</button>
                                            </Link>
                                          </td>*/}
                                          <td>
                                            <button onClick={() => {this.updateName(agent._id)} } className="button is-primary">Pending</button> {' '}
                                            <button onClick={() => {this.updateName(agent._id)} } className="button is-info">Approved</button> {' '}
                                            <button onClick={() => {this.updateName(agent._id)} } className="button is-danger">Rejected</button>
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

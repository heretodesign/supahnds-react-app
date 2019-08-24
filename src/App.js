import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link } from "react-router-dom"
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import NoticeNav from './components/content/NoticeNav'

const ListPage = lazy(() => import('./pages/ListPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <NoticeNav />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={ListPage} />
          <Route path="/pages/viewpage/:id" component={ViewPage} />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;

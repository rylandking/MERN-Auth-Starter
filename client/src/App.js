import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Accounts from './components/layout/Accounts';
import Transactions from './components/layout/Transactions';
import Trends from './components/layout/Trends';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <div className='min-h-screen bg-white'>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/accounts' component={Accounts} />
            <Route exact path='/transactions' component={Transactions} />
            <Route exact path='/trends' component={Trends} />
          </Switch>
        </section>
      </div>
    </Fragment>
  </Router>
);

export default App;

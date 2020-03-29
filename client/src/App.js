import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Accounts from './components/layout/Accounts';
import Transactions from './components/layout/Transactions';
import Trends from './components/layout/Trends';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <div class='min-h-screen bg-white'>
        <Navbar />
      </div>
    </Fragment>
  </Router>
);

export default App;

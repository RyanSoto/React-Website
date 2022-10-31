import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/resume' component={Resume} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/search'>
            {/* Search Page (the result page) */}
            <SearchPage />
          </Route>
          <Route path='/'>
            {/* Home page (the one with the search one) */}
            <Home />
          </Route>
        </Switch>
        {/* 2 page app */}
      </Router>
    </div>
  );
}

// 1st add router and everything gets inside it
// add switch

export default App;

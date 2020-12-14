import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import AboutPage from './pages/Aboutpage';
import HomePage from './pages/Homepage';
import SinglePage from './pages/Singlepage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/singleshow/:id' component={SinglePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

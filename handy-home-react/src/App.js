import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <MyNav />
      <div className="nav-break"></div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/pricing" component={Pricing} />
        <Route path="/services" component={Services}/>
        <Route path ="/contact" component={Contact}/>
      </Switch>
      <footer className="footer">
        <div className="container">
          <span>Footer</span>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;

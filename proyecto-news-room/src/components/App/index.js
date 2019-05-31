import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Nav from '../Nav'

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/:slug" component={Category} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

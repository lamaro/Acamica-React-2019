import React, { Component } from 'react'
import Home from '../../pages/Home'
import HotelPage from '../../pages/HotelPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotel/:slug" component={HotelPage} />
          </Switch>
      </Router>
    )
  }
}

export default App
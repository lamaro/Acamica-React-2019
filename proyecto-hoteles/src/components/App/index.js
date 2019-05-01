import React, { Component } from 'react'
import Hero from '../Hero'
import Filters from '../Filters'
import './index.css'

class App extends Component {
  render() {
    const today = Date()
    const filters = {
      dateFrom:new Date(today.valueOf() + 86400000),
      dateTo: new Date(today.valueOf() + 86400000),
      country: '',
      price: 0,
      rooms: 0
    }

    return (
      <div>
        <Hero filters={ filters }></Hero>
        <Filters></Filters>
      </div>
    )
  }
}

export default App

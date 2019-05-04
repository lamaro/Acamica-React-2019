import React, { Component } from 'react'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'
import './index.css'

class App extends Component {
  constructor(){
    super()
    this.handleFilterChange = this.handleFilterChange.bind(this) //es necesario?????
    const today = new Date().toLocaleDateString()
    const nextMonth = new Date().toLocaleDateString()
    this.state = {
      filters: {
        dateFrom: today,
        dateTo: nextMonth,
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: [],
      hotelsFiltered: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ hotels: json });
    } catch (error) {
      console.log(error);
    }
  }

  handleFilterChange(payload) {

    const {dateFrom, dateTo, country, price, rooms} = payload
    const hotelsFiltered = this.state.hotels.filter(hotel => {
      return hotel.rooms <= rooms
      && hotel.price == price
      && hotel.country.trim().toLowerCase() == country.trim().toLowerCase()
    })
    console.log(hotelsFiltered)

    this.setState({
      filters: payload,
      hotelsFiltered:hotelsFiltered
    }) 
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters }></Hero>
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }></Filters>
        <Hotels hotels={ this.state.hotelsFiltered.length > 0 ? this.state.hotelsFiltered : this.state.hotels } />
      </div>
    )
  }
}

export default App

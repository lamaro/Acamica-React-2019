import React, { Component } from 'react'
import Moment from 'moment'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'
import HotelsEmpty from '../HotelsEmpty'
import './index.css'

class App extends Component {
  constructor(){
    super()
    this.handleFilterChange = this.handleFilterChange.bind(this) //es necesario?????
    const today = new Date()
    const dateTime = Moment(today).format("YYYY-MM-DD");
    this.state = {
      filters: {
        dateFrom: dateTime,
        dateTo: dateTime,
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: [],
      hotelsFiltered: [],
      filterAplyed: false,
      hotelsLoaded: false //Es necesario? de vuelta conflicto primer render
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ hotels: json, hotelsLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  handleFilterChange(payload) {

    const {dateFrom, dateTo, country, price, rooms} = payload

    const hotelsFiltered = this.state.hotels.filter(hotel => {
      return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom
      && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
      && hotel.rooms <= (rooms != undefined ? rooms : hotel.rooms)
      && hotel.price == (price != undefined ? price : hotel.price)
      && hotel.country.trim().toLowerCase() === (country != undefined ? country.trim().toLowerCase() : hotel.country.trim().toLowerCase())
    })

    this.setState({
      filters: payload,
      hotelsFiltered: hotelsFiltered,
      filterAplyed: true
    }) 
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters }></Hero>
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }></Filters>
        <Hotels 
        hotels={ this.state.filterAplyed ? this.state.hotelsFiltered : this.state.hotels } 
        hotelsLoaded={this.state.hotelsLoaded}
        /> 
      </div>
    )
  }
}



export default App

import React, { Component } from 'react'
import Moment from 'moment'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'
import './index.css'

class App extends Component {
  constructor(){
    super()
    this.handleFilterChange = this.handleFilterChange.bind(this) //es necesario?????
    //this.handleFilter = this.handleFilter.bind(this) //es necesario?????
    const today = new Date()
    const todayFormated = Moment(today).format("YYYY-MM-DD");
    const nextMonthFormated = Moment(today).add(1, 'month').format("YYYY-MM-DD");
    this.state = {
      filters: {
        dateFrom: todayFormated,
        dateTo: nextMonthFormated,
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: [],
      hotelsFiltered: [],
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
      this.setState({ 
        hotels: json, 
        hotelsLoaded: true
      });
      this.handleFilterChange(this.state.filters) //Filtra los hoteles
    } catch (error) {
      console.log(error);
    }
  }

  handleFilter(payload){
    //Filtro de hoteles. Controla que los filtros no sean undefined para no tener que elegirlos todos para filtrar. Es correcto?
    const {dateFrom, dateTo, country, price, rooms} = payload
    const hotelsFiltered = this.state.hotels.filter(hotel => { 
      return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom
      && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
      && hotel.rooms <= (rooms !== undefined ? rooms : hotel.rooms)
      && hotel.price === (price !== undefined ? parseInt(price) : hotel.price)
      && hotel.country.trim().toLowerCase() === (country !== undefined ? country.trim().toLowerCase() : hotel.country.trim().toLowerCase())
    })
    return hotelsFiltered
  }

  handleFilterChange(payload) {
    //console.log(payload)
    const hotelsFiltered = this.handleFilter(payload)
    this.setState({
      filters: payload,
      hotelsFiltered: hotelsFiltered,
      //filterAplyed: true
    }) 
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters }></Hero>
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }></Filters>
        {this.state.hotelsLoaded ?
        <Hotels 
        hotels={ this.state.hotelsFiltered } 
        /> 
        :
        <div></div>
        }
      </div>
    )
  }
}

export default App
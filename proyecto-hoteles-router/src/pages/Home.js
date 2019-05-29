import React, { Component } from 'react'
import Moment from 'moment'
import Hero from '../components/Hero'
import Filters from '../components/Filters'
import Hotels from '../components/Hotels'

let filtersPersisted = null;

class Home extends Component {
  constructor(){
    super()
    this.handleFilterChange = this.handleFilterChange.bind(this) //es necesario hacer este bind si no hay componente superior?????
    //this.handleFilter = this.handleFilter.bind(this) //idem anterior?????
    const today = new Date()
    const todayFormated = Moment(today).format("YYYY-MM-DD") //Se utiliza la libreria moment. No termine de poder aplicar la de location que hablamos en slack
    const nextMonthFormated = Moment(today).add(1, 'month').format("YYYY-MM-DD")
    this.state = {
      filters: {
        dateFrom: todayFormated,
        dateTo: nextMonthFormated,
        country: 'select', //Le cambié undefined para poder controlar los filtros de manera independiente preguntando si no es select ej: linea 53
        price: 'select',
        rooms: 'select'
      },
      hotels: [], //Se completa con todos los hoteles que existen en el endpoint
      hotelsFiltered: [], //Se actualiza con los hoteles con los filtros aplicados
      hotelsLoaded: false //No muestra hoteles hasta que se completa el fetch de hoteles
    }
  }

  async componentDidMount() { //Es correcto hacer el fetch en el componentDidMount. si se hace como función independiente. Donde se llama por primera vez?
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
      if (filtersPersisted) {
        this.setState({ filters: filtersPersisted });
      }
      this.handleFilterChange(this.state.filters) //Filtra los hoteles con las fechas predefinidas. Actualiza el state.
      
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    filtersPersisted = this.state.filters;
  }

  handleFilter(payload){
    //Filtro de hoteles. Controla que los filtros no sean 'select' (ex undefined) para no tener que elegirlos todos para filtrar. Es correcto?
    let {dateFrom, dateTo, country, price, rooms} = payload
    const hotelsFiltered = this.state.hotels.filter(hotel => { 
      return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom
      && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
      && hotel.rooms <= (rooms !== 'select' ? rooms : hotel.rooms)
      && hotel.price === (price !== 'select' ? parseInt(price) : hotel.price)
      && hotel.country.trim().toLowerCase() === (country !== 'select' ? country.trim().toLowerCase() : hotel.country.trim().toLowerCase())
    })
    return hotelsFiltered
  }

  handleFilterChange(payload) { //No me quedó claro la forma en que los componentes envian info a su componente superior para que este actualize el state. Necesito profundizar en esto.
    const hotelsFiltered = this.handleFilter(payload)
    this.setState({
      filters: payload,
      hotelsFiltered: hotelsFiltered,
    }) 
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } hotelsQuantity={ this.state.hotelsFiltered.length }></Hero>
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }></Filters>
        {this.state.hotelsLoaded ?
        <Hotels //Si ya hizo el fetch de hoteles, muestra algo, sino vacio. Es correcto?
        hotels={ this.state.hotelsFiltered } 
        /> 
        :
        <div></div>
        }
      </div>
    )
  }
}

export default Home
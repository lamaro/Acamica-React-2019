import React, { Component } from 'react'

class Hotel extends Component {
    constructor(props){
        super(props)
      }

    state = {
        hotel: [],
        error: null,
        isLoading: true,
      }

      async componentDidMount() {
        try {
            this.setState({ isLoading: true })
            const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const filtroHotel = json.find(hotel =>hotel.slug === this.props.match.params.slug)
            this.setState({ 
            hotel: filtroHotel, 
            isLoading: false
            });
        } catch (error) {
          console.log(error);
        }
      }

    render(){
        return(
            <div>
            {this.state.isLoading && <p>loading...</p>}
            {this.state.hotel && (
                <section className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                        {this.state.hotel.name}
                        </h1>
                        <h2 className="subtitle">
                            {this.state.hotel.city}, {this.state.hotel.country}
                        </h2>
                        </div>
                    </div>
                </section>
            )}
            </div>
        )
    }
}

export default Hotel;




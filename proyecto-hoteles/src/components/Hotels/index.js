import React from 'react'
import Hotel from '../Hotel'

const Hotels = props => {
    const { hotels } = props

    const hotelsRender = hotels.map(hotel => 
        <div key={hotel.slug} className="column is-one-third">
            <Hotel data={ hotel } />
        </div>
    )
    return(
        <section className="section" style={ {marginTop: '3em'} }>
            <div className="container">
                <div className="columns is-multiline">
                    {hotelsRender}
                </div>
            </div>
        </section>
    )
}

export default Hotels
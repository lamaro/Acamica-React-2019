import React from 'react'
import Hotel from '../Hotel'
import HotelsEmpty from '../HotelsEmpty'

const Hotels = props => {
    const { hotels } = props
    console.log(hotels)
    const hotelsRender = hotels.map(hotel => 
        <div key={hotel.slug} className="column is-one-third">
            <Hotel { ...hotel }  />
        </div>
    )

    return(
        <section className="section" style={ {marginTop: '3em'} }>
            <div className="container">
                {
                hotelsRender.length > 0 ?
                <div className="columns is-multiline">
                    {hotelsRender} 
                </div>
                : 
                <HotelsEmpty />
                }
            </div>
        </section>
    )
}

export default Hotels
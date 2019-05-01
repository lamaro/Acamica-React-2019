import React from 'react'
const Hero = props => {
    const { filters } = props
    console.log(filters);
    return(
        <section className="hero is-primary">
            <div className="hero-body">
            <div className="container">
                <h1 className="title">Hoteles</h1>
                <h2 className="subtitle">
                desde el <strong>{filters.dateFrom.toLocaleDateString()}</strong> hasta el <strong>{filters.dateTo.toLocaleDateString()}</strong>
                </h2>
            </div>
            </div>
        </section>
    )
}

export default Hero;
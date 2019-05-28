import React from 'react'

const HotelsEmpty = props =>{
    return(
        <article className="message is-warning">
            <div className="message-body">
                No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
            </div>
        </article>
    )
}

export default HotelsEmpty
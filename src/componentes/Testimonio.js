import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require('../imagenes/testimonio_frente.png')}
                alt='Foto de frente'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonio'>Ingenieria de software en spotify</p>
                <p className='texto-testimonio'>Aca va una descripcion</p>
            </div>
        </div>
    )
}

export default Testimonio;
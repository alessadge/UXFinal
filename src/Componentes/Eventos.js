import React from 'react';
import imagen from '../Img/ironpit.jpg';
import '../App.css';
function Eventos() {
    return (
        <div className='container'>
            <h5>.</h5>
            <h5>.</h5>
            <div class="jumbotron"><h2>Iron Pitbull Club</h2>
                <h3>27 Octubre Reto</h3></div>
            <img src={imagen} class="rounded" alt="Cinque Terre"/>
        </div>
            );
        }
        
        export default Eventos;
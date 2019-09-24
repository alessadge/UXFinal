import React from 'react';
import imagen from '../Img/Logotipo.png';
import fb from '../Img/fb.png';
import insta from '../Img/insta.png';
import '../App.css';
import {
  FacebookShareCount

} from 'react-share';

function Inicio() {
  return (
    <div className='container'>
      <div className="container">
        <h1>.</h1>
        <img src={imagen} class="rounded" alt="Cinque Terre" class="img-responsive" width="800" height="350" />
        <h1>_</h1>
        <div className="jumbotron">
          <h1>¿Quienes Somos?</h1>
        </div>
        <div className="row">
          <div className="col-sm-6 text-light">
            <h3>Misión</h3>
            <p class="text-justify font-weight-bolder text-light">Somos una organización sin animo de lucro dedicada a generar cambios en el imaginario colectivo
               con el fin de reintegrar al American Pitbull Terrier (APBT) a la sociedad. empleando métodos alternos
               para la canalización de su capacidad enérgica por medio del deporte, la obediencia y la crianza
               minuciosa y responsabilizada, así como la lucha constante en contra del maltrato animal, con el
               objetivo de eliminar las estigmatizaciones, lograr el respeto por w igualdad de derechos del APBT
              entre otras razas y la sana interacción humano-can.</p>
          </div>
          <div class="col-sm-6 text-light">
            <h3>Visión</h3>
            <p class="text-justify font-weight-bolder text-light">Ser una organización que además de velar por los intereses de nuestros canes,
             en el entorno de necesidades que nuestra actual sociedad atraviesa, también ser reconocidos como un grupo
             de profesionales comprometidos con nuestro País, a través del desarrollo de proyectos, planes y programas
             sociales que aporten al mejoramiento de la calidad de vida del ser humano y su entorno. Trabajando con
             profesionalismo y excelencia en todas sus acciones.</p>
          </div>
        </div>
        <div className="jumbotron">
          <h1>¿Contacto?</h1>
        </div>
        <div className="row">
          <div className="col-sm-6 text-light">
          <p><a href="https://www.facebook.com/PitworldAssociation/" target="_blank"><img src={fb} class="rounded" alt="Cinque Terre" class="img-responsive" width="300" height="100" /></a></p>
          </div>
          <div class="col-sm-6 text-light">
          <p><a href="https://www.instagram.com/pitworldassociation/" target="_blank"><img src={insta} class="rounded"href="https://www.facebook.com/PitworldAssociation/" alt="Cinque Terre" class="img-responsive" width="300" height="100" /></a></p>
          </div>
        </div>
      </div>
    </div>




  );
}
export default Inicio;
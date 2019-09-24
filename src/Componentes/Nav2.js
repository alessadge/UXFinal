import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Nav2() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">Pitworld</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link to='/Inicio'>
            <li class="nav-item" href="/Inicio"><a class="btn btn-dark" >Inicio</a></li>
          </Link>
          <Link to='/Eventos'>
            <li class="nav-item"><a class="btn btn-dark" >Eventos</a></li>
          </Link>
          <Link to='/Galeria'>
            <li class="nav-item"><a class="btn btn-dark" color >Galeria</a></li>
          </Link>
          <Link to='/Perfil'>
            <li class="nav-item"><a class="btn btn-dark" color >Perfil</a></li>
          </Link>
        </ul>
        <SocialIcon url="https://www.facebook.com/PitworldAssociation/" target="_blank" />
        <div class="divider">_</div>
        <SocialIcon url="https://www.instagram.com/pitworldassociation/" target="_blank" />
        <div class="divider">_</div>
        <Link to='Login'>
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
        </Link>
      </div>
    </nav>
      );
}

export default Nav2;

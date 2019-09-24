
import './App.css';
import Nav from "./Componentes/Nav";
import Inicio from "./Componentes/Inicio";
import Noticias from "./Componentes/Noticias";
import Galeria from "./Componentes/Galeria";
import Login from "./Componentes/Login";
import Events from "./Componentes/Eventos";
import Signup from "./Componentes/Signup";
import Perfil from "./Componentes/Perfil";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import imagen from './Img/full.jpg';
import desktopImage from './Img/blue.jpg';
import mobileImage from './Img/blue.jpg';
import React, { useState, useEffect } from 'react';


const App = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
  return (
    <div className="App" style={{  backgroundImage: `url(${imageUrl})` }}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Inicio" component={Inicio} />
          <Route path="/Noticias" component={Noticias} />
          <Route path="/Eventos" component={Events} />
          <Route path="/Galeria" component={Galeria} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup}/>
          <Route path="/Perfil" component={Perfil}/>
        </Switch>
      </Router>
      
    </div>
  );
};


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};
const Home = () => (
  <div>
    <img src={imagen} class="rounded" alt="Cinque Terre"></img>
  </div>
)

export default App;

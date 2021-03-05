import React from 'react';
import './App.css';
import logo from './images/logo.png';
function Header() {
  return (
    <div class='header'>

        <img src={logo} class='logo' alt='logotipo do ivpt'/>

      <div id="divBusca">
       
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca">Pesquisar</button>
      </div>

    </div>
  );
}

export default Header;

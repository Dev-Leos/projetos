import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';
import Footer from './Footer';
import './index.css';



ReactDOM.render(
  <div>

<Header />
<Routes />
<Footer />
  
    </div>,
   
  document.getElementById('root')
);



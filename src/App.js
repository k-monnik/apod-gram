import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Home from './Components/Home';
import NasaPhoto from './Components/NasaPhoto';



library.add(faHeart);


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>

    </BrowserRouter>
  );
}

export default App;

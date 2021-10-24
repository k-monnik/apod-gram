import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import NasaPhoto from './Components/NasaPhoto';

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

import React from 'react';
import './App.css'
import {  Route, Routes } from 'react-router-dom';

import Inicio from './Inicio';
import Receta from './Receta';



  const App =  () => {
    



  return (
   
    
    <>
      <Routes>
      <Route path="/" element={<Inicio></Inicio>}/>
      <Route path="/receta" element={<Receta></Receta>}/>
      </Routes>

      
    
</>
  );
}

export default App;
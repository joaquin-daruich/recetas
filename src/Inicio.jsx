import React  from 'react';
import './App.css'
import { Link } from 'react-router-dom';


const Inicio = () => {
     





  return (
   
    
    <>

    <div className='inicio'>
      <span className='parrafo'>Aca arriba te dejo un link para que vayas a nuestra receta Bacalhau à Brás (super sencilla) </span>
      {<Link className='parrafo' to={'/receta'}>👉 Click aquí para receta de Bacalhau à Brás
      </Link>}
      
    </div>
    

    
      <img className='ElJardinDelH' src="https://juegohdenaruto.netlify.app/devuelta.png" alt="Receta Facil" />




      <div className='contenedorDeParrafos'>
  <div className='contenedorDeParrafo2'>
    <p className='parrafo'>Bienvenidos a nuestro rincón culinario, donde encontrarás recetas deliciosas y accesibles para todos los gustos.</p>
    
    <p className='parrafo'>Descubre platos tradicionales y modernos, con ingredientes fáciles de conseguir y pasos sencillos para preparar en casa.</p>
    
    <p className='parrafo'>Desde aperitivos rápidos hasta postres irresistibles, aquí encontrarás inspiración para cada comida del día.</p>
    
    <p className='parrafo'>Navega por nuestras categorías y sorprende a tu familia y amigos con recetas llenas de sabor.</p>
    
    <img className='pruebade' src='/bacalao.jpeg' alt='Receta destacada' />
    
    <p className='parrafo'>Explora nuestras recetas recomendadas, con ingredientes frescos y fáciles de encontrar. ¡Cocinar nunca fue tan divertido!</p>
    
    <img className='pruebade' src='/postre.jpg' alt='Postre delicioso' />
    
    <p className='parrafo'>¡Anímate a probar nuevas combinaciones y comparte con nosotros tus creaciones culinarias!</p>
  </div>

  <div className='contenedorDeParrafo3'>
    <div className='contenedorDeParrafo4'>
      <p>¡No te pierdas nuestras últimas recetas y consejos de cocina!</p>
      {<Link to={'/receta'}>👉 Click aquí para receta de Bacalhau à Brás
      </Link>}
      <h1>Recetas fáciles</h1>
      <h1>Cocina rápida</h1>
      <h1>Postres caseros</h1>
      <h1>Platos tradicionales</h1>
      <h1>Recetas saludables</h1>
    </div>
  </div>
</div>
    



      
    
</>
  );
}


export default Inicio
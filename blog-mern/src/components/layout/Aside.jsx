import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Global } from '../../helpers/Global';

export const Aside = () => {

    const [buscar, setBuscar] = useState("");
    const navegar = useNavigate();

    const busqueda = (e) =>{
        e.preventDefault();
        let mi_busqueda = e.target.search_field.value;
        navegar("/search/"+mi_busqueda, { replace: true});
    }


  return (
      <aside className="lateral">
              <div className="search">
                  <h3>Buscador</h3>
                  <form onSubmit={busqueda}>
                      <input type="text" name='search_field'/>
                      <input type="submit" id='search' value="Buscar" />
                  </form>
              </div>
              {/*
              <div className="add">
                  <h3 className="title">Añadir pelicula</h3>
                  <form action="">
                      <input type="text" placeholder="titulo"/>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <input type="submit" value="Enviar"/>
                  </form>
              
              </div>  */}
      </aside>
  )
}

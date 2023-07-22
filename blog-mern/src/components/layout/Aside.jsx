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
                  <h3>Search bar</h3>
                  <form onSubmit={busqueda}>
                      <input type="text" name='search_field'/>
                      <input type="submit" id='search' value="Search" className='button'/>
                  </form>
              </div>
      </aside>
  )
}

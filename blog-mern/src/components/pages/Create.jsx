import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'

export const Create = () => {

  const {formulario, enviado, cambiado} = useForm({});
  
  const guardarArticulo = (e) =>{
    
    e.preventDefault();
    let nuevoArticulo = JSON.stringify(formulario);

    console.log(nuevoArticulo);
  }


  return (
    <div className='jumbo'>
      <h1>Crear articulo</h1>
      <pre>{JSON.stringify(formulario)}</pre>

      {/* Montar formulario */}
      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='title'>Titulo</label>
          <input type='text' name='title' onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Contenido</label>
          <input type='textarea' name='content' onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Imagen</label>
          <input type='file' name='file' id='file' />
        </div>

        <input type='submit' value="guardar" className='btn btn-success'/>


      </form>
    </div>
  )
}

import React from 'react'

export const Create = () => {
  return (
    <div className='jumbo'>
      <h1>Crear articulo</h1>

      {/* Montar formulario */}
      <form className='formulario'>

        <div className='form-group'>
          <label htmlFor='title'>Titulo</label>
          <input type='text' name='title'/>
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Contenido</label>
          <input type='textarea' name='content'/>
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Imagen</label>
          <input type='file' name='file' id='file'/>
        </div>

        <input type='submit' value="guardar" className='btn btn-success'/>


      </form>
    </div>
  )
}

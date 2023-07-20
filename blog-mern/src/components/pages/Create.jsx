import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

export const Create = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  
  const guardarArticulo = async(e) =>{
    
    e.preventDefault();

    //recoger datos del formulario
    let nuevoArticulo = formulario;


    //Guardar artículo en el backend
    const {datos, cargando} = await Peticion(Global.url+"save", "POST", nuevoArticulo);


    if(datos.status === "Success"){

      setResultado("guardado");


    } else {
      setResultado("error")


    }

    
    //subir la imagen 
    const fileInput = document.querySelector("#file");

    if(datos.status === "Success" && fileInput.files[0]){



      setResultado("guardado");


      //formData para mandar archivos
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      //peticion
      const subida = await Peticion(Global.url+"upload-image/"+datos.article._id, "POST", formData, true);


      
      if(subida.datos.status === "Success"){

        setResultado("guardado");


      } else {
        setResultado("error")

      }



    } 

  }


  return (
    <div className='jumbo'>
      <h1>Crear articulo</h1>

      <strong>{resultado === "guardado" ? "Articulo guardado con exito!!" : ""}</strong>
      <strong>{resultado === "error" ? "Validación incorrecta!!" : ""}</strong>
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

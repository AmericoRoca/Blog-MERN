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
      <h1>Create Article</h1>

      <strong className='strong-good'>{resultado === "guardado" ? "ARTICLE SAVED SUCCESSFULLY!!" : ""}</strong>
      <strong className='strong-bad'>{resultado === "error" ? "INCORRECT VALIDATION!!" : ""}</strong>
      {/* Montar formulario */}
      <form className='formulario' onSubmit={guardarArticulo}>

        <h3>Create your firts article by filling this form, be creative!</h3>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <input type='textarea' name='content' onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Image</label>
          <input type='file' name='file' id='file' disabled/>
        </div>

        <input type='submit' value="Save" className='button'/>


      </form>
    </div>
  )
}

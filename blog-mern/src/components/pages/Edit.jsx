import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Edit = () => {

  const [article, setArticle] = useState({});
  const {formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {

    const { datos } = await Peticion(
      Global.url + "get-article/" + params.id,
      "GET"
    );

    //asignar datos
    if (datos.status === "success") {
      setArticle(datos.article);
      console.log(datos.article);
    }


  };
  
  const editarArticulo = async(e) =>{
    
    e.preventDefault();

    //recoger datos del formulario
    let nuevoArticulo = formulario;

    if(nuevoArticulo.titulo==null){

      nuevoArticulo.titulo = article.title

    }

    if(nuevoArticulo.contenido==null){

      nuevoArticulo.contenido = article.content

    }

    if(nuevoArticulo.imagen==null){

      nuevoArticulo.imagen = article.image

    }

    //Guardar artículo en el backend
    const {datos, cargando} = await Peticion(Global.url+"update-article/"+params.id, "PUT", nuevoArticulo);
    console.log(datos)
    

    if(datos.message === "Article updated"){

      setResultado("guardado");


    } else {
      setResultado("error")


    }

    //subir la imagen 
    const fileInput = document.querySelector("#file");


    if(datos.message === "Article updated" && fileInput.files[0]){



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
      <h1>Edit article: {article.title}</h1>

      <strong>{resultado === "guardado" ? "Article successfully saved!!" : ""}</strong>
      <strong>{resultado === "error" ? "Incorrect validation!!" : ""}</strong>
      {/* Montar formulario */}
      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' onChange={cambiado} defaultValue={article.title}/>
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <input type='textarea' name='content' onChange={cambiado} defaultValue={article.content}/>
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Image</label>
          <div className="mascara">
            {article.image === "default.png" && (
              <img src="https://americoroca.com/wp-content/uploads/2023/07/logo-blog-copia.png" />
            )}
            {article.image != "default.png" && (
              <img src={Global.url + "imagen/" + article.image} />
            )}
          </div>
          <input type='file' name='file' id='file' />
        </div>

        <input type='submit' value="Save" className='button'/>


      </form>
    </div>
  )
}

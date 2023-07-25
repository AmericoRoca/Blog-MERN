import React from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Link } from 'react-router-dom'

export const Listado = ({articles, setArticles}) => {


  const eliminar = async(id) =>{
    
    let { datos } = await Peticion(Global.url+"delete-article/"+id, "DELETE");
    console.log(datos);

    if(datos.status === "success"){
      let articulosActualizados = articles.filter(articulo => articulo._id !== id);
      setArticles(articulosActualizados);
    }

  }


  return (
    articles.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              { articulo.image === "default.png" && <img src="https://americoroca.com/wp-content/uploads/2023/07/logo-blog-copia.png" />}
              { articulo.image != "default.png" && <img src={Global.url+"imagen/"+articulo.image} />}
            </div>
            <div className="datos">
              <h3 className="title"><Link to={"/article/"+articulo._id}>{articulo.title}</Link></h3>
              <p className="description">{articulo.content}</p>
              <Link to={"/edit/"+articulo._id} className='edit'>Edit</Link>
              <button className="delete" onClick={() => {
                eliminar(articulo._id)
              }}>Remove</button>
            </div>
          </article>
        );
      })
  )
}

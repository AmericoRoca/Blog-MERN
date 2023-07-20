import React from 'react'
import { Global } from '../../helpers/Global';

export const Listado = ({articles, setArticles}) => {



  return (
    articles.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              { articulo.image === "default.png" && <img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" />}
              { articulo.image != "default.png" && <img src={Global.url+"imagen/"+articulo.image} />}
            </div>
            <div className="datos">
              <h3 className="title">{articulo.title}</h3>
              <p className="description">{articulo.content}</p>
              <button className="edit">Edit</button>
              <button className="delete">Remove</button>
            </div>
          </article>
        );
      })
  )
}

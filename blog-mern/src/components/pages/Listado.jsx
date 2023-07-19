import React from 'react'

export const Listado = ({articles, setArticles}) => {



  return (
    articles.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              <img src={articulo.image} />
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

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const url = "http://localhost:3900/api/get-articles";

    //peticion ajax
    let peticion = await fetch(url, {
      method: "GET",
    });

    //conseguir datos
    let datos = await peticion.json();

    //asignar datos
    if (datos.status === "success") {
      setArticles(datos.articulos);
    }

    console.log(datos.articulos);
  };

  return (
    <>
      {articles.length >= 1 ? (
        articles.map((articulo) => {
          return (

              <article key={articulo._id} className="articulo-item">
                <div className="mask">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
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
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};

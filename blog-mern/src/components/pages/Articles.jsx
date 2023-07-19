import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {

    const { datos, cargando } = await Peticion(
      Global.url + "get-articles",
      "GET"
    );

    //asignar datos
    if (datos.status === "success") {
      setArticles(datos.articulos);
    }

    setCargando(false);
   
  };

  return (
    <>
      {cargando ? (
        "Cargando..."
      ) : articles.length >= 1 ? (
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
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};

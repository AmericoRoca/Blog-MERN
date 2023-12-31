import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";
import { Link } from "react-router-dom";

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
        <div className="jumbo"><h2 className="loading">Loading...</h2></div>
      ) : articles.length >= 1 ? (
        <Listado
          articles={articles}
          setArticles={setArticles}/>
      ) : (
        <div className="jumbo">
          <h1>There is no articles</h1>
          <img src="https://americoroca.com/wp-content/uploads/2023/07/cry-copia.png" alt="cry-logo" />
          <h2>Go to <Link to="/create" className="link-link">Create article</Link> to add the first one</h2>
        </div>
      )}
    </>
  );
};

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";

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
        <Listado
          articles={articles}
          setArticles={setArticles}/>
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};

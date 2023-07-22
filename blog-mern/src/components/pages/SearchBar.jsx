import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";
import { useParams } from "react-router-dom";

export const SearchBar = () => {

  const [articles, setArticles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getArticles();
  }, [params]);

  const getArticles = async () => {

    const { datos, cargando } = await Peticion(
      Global.url + "buscar/"+params.busqueda,
      "GET"
    );

    //asignar datos
    if (datos.status === "success") {
      setArticles(datos.articulos);
    } else {
      setArticles([])
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
        <div className="jumbo">
          <h1>There is no articles</h1>
        </div>
      )}
    </>
  );
};

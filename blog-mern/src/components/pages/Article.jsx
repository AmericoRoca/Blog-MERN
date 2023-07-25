import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Article = () => {
  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const { datos, cargando } = await Peticion(
      Global.url + "get-article/" + params.id,
      "GET"
    );

    //asignar datos
    if (datos.status === "success") {
      setArticle(datos.article);
    }

    setCargando(false);
    console.log(article);
  };

  return (
    <>
      {cargando ? (
        "Loading..."
      ) : (
        <article key={article._id} className="articulo-item">
          <div className="mascara">
            {article.image === "default.png" && (
              <img src="https://cursosdedesarrollo.com/wp-content/uploads/2019/11/react.svg" />
            )}
            {article.image != "default.png" && (
              <img src={Global.url + "imagen/" + article.image} />
            )}
          </div>
          <div className="datos">
            <h1>{article.title}</h1>
            <span>{article.date}</span>
            <p>{article.content}</p>
          </div>
        </article>
      )}
    </>
  );
};

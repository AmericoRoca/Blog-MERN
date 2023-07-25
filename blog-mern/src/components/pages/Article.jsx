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
        <h2 className="loading">"Loading..."</h2>
      ) : (
        <article key={article._id} className="articulo-item">
          <div className="mascara">
            {article.image === "default.png" && (
              <img src="https://americoroca.com/wp-content/uploads/2023/07/logo-blog-copia.png" className="img-article"/>
            )}
            {article.image != "default.png" && (
              <img src={Global.url + "imagen/" + article.image} />
            )}
          </div>
          <div className="datos">
            <h2 className="article-title">{article.title}</h2>
            <span className="article-date">{article.date}</span>
            <h2 className="article-content">{article.content}</h2>
          </div>
        </article>
      )}
    </>
  );
};

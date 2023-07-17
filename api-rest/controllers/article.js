const Article = require("../models/Article");
const { validarArticulo }  = require('../helpers/validar')

const saveArticle = async (req, res) => {
  let params = req.body;

  validarArticulo(params);

  try {
    // Creating the article object
    let articulo = new Article(params);

    // Saving the article to the database
    let articleSaved = await articulo.save();

    // Sending the success response with necessary article information
    return res.status(200).json({
      status: "Success",
      article: articleSaved,
      mensaje: "Article successfully created",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Error",
      mensaje: "No se ha guardado el artículo",
    });
  }
};

const getArticles = async (req, res) => {
  try {
    const articulos = await Article.find({}).sort({
      date: -1
    });

    if (!articulos || articulos.length === 0) {
      return res.status(400).json({
        status: "Error",
        mensaje: "No se han encontrado artículos",
      });
    }

    return res.status(200).json({
      status: "success",
      contador: articulos.length,
      articulos

    });
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Error",
      mensaje: "Ocurrió un error al obtener los artículos",
    });
  }
}

const getArticleById = async (req,res) => {

  const id = req.params.id;



  try{
   
    const article = await Article.findById(id);

    

    if (!article) {
      return res.status(404).json({
        status: "Error",
        mensaje: "No se ha encontrado el artículo",
      });
    }

    return res.status(200).json({
      status: "success",
      article,
    });

     
  } catch(error){
    return res.status(404).json({
      status: "Error",
      mensaje: "No se ha encontrado el artículo",
    });
  }
}

const deleteArticle = async (req, res) =>{

    const id = req.params.id;

    try {

      const articleDeleted = await Article.findOneAndDelete({_id: id});

      if(!articleDeleted){
        return res.status(404).json({
          status: "Error",
          mensaje: "No se ha encontrado el artículo",
        });
      }

      return res.status(200).json({
        status: "success",
        article: articleDeleted,
        mensaje: "Articulo borrado"
      });
      
    } catch (error) {
      return res.status(404).json({
        status: "Error",
        mensaje: "No se ha encontrado el artículo",
      });
    }
}

const updateArticle = async (req,res) =>{

  let id = req.params.id;

  let params = req.body;

  validarArticulo(res,params)

  try {

    let updatedArticle = await Article.findOneAndUpdate({_id: id}, req.body, {new: true});

    if(!updateArticle){
      return res.status(500).send({
        status: "error",
        message: "Error al actualizar",
        
      })
    }

    return res.status(200).send({
      message: "Article updated",
      article: updatedArticle,

    })


    
  } catch (error) {
    return res.status(404).send({
      message: "Article not updated",
      error: error

    })
  }

}



module.exports = {
  saveArticle,
  getArticles,
  getArticleById,
  deleteArticle,
  updateArticle
}

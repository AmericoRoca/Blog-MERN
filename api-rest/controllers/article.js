const Article = require("../models/Article");
const { validarArticulo }  = require('../helpers/validar')
const fs = require("fs")
const path = require("path")

const saveArticle = async (req, res) => {
  let params = req.body;

  validarArticulo(res,params);

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

const uploadImage = async(req,res) =>{

  //configurar multer para la subida de archivos



  //recoger fichero de imagen subido
  if(!req.file && !req.files){
    return res.status(404).send({
      message: "Invalid request"
     
    });
  }


  //conseguir el nombre de la imagen
  let archivo = req.file.originalname;


  //conseguir extension
  let archivo_split = archivo.split("\.");
  let extension = archivo_split[1];

  //comprobar extension correcta
  if(extension != "png" && extension != "jpg" && extension != "jpeg" && extension != "gif"){

    //Borrar archivo y dar respuesta
    fs.unlink(req.file.path, (error) =>{

      return res.status(400).send({
        message: "Invalid extension"
       
      });

    });



  } else {

    let id = req.params.id;


    try {
  
      let updatedArticle = await Article.findOneAndUpdate({_id: id}, {image: req.file.filename}, {new: true});
  
      if(!updateArticle){
        return res.status(500).send({
          status: "error",
          message: "Error al actualizar",
          
        })
      }
  
      return res.status(200).send({
        message: "Article updated",
        article: updatedArticle,
        fichero: req.file.filename,
        file: req.file,
        status: "Success"
      });
  
  
      
    } catch (error) {
      return res.status(404).send({
        message: "Article not updated",
        error: error
  
      })
    }

    

  }



}

const imagen = async (req,res) =>{

  let file = req.params.file;
  let ruta = "https://github.com/AmericoRoca/Blog-MERN/tree/main/api-rest/imagenes/articulos"+file;

  fs.stat(ruta, (error, exists) =>{

    if(exists){
      return res.sendFile(path.resolve(ruta));

    } else {
      return res.status(404).json({
        status: "Error",
        message: "Image doesn't exits",
        exists,
        file,
        ruta
        
      });

    }

  });


}

const buscador = async (req, res) => {
  try {
    //Sacar el string de busqueda
    let busqueda = req.params.busqueda;

    //FIND OR 
    const articulosEncontrados = await Article.find({
      "$or": [
        { "title": { "$regex": busqueda, "$options": "i" } },
        { "content": { "$regex": busqueda, "$options": "i" } },
      ]
    })
      .sort({ date: -1 })
      .exec();

    if (!articulosEncontrados || articulosEncontrados.length === 0) {
      return res.status(404).json({
        status: "Error",
        message: "Can't find the articles"
      });
    }

    return res.status(200).json({
      status: "success",
      articulos: articulosEncontrados
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Internal server error",
      error: error.message
    });
  }
};



module.exports = {
  saveArticle,
  getArticles,
  getArticleById,
  deleteArticle,
  updateArticle,
  uploadImage,
  imagen,
  buscador
}

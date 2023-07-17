const validator = require("validator");


const validarArticulo = (res, params) =>{

    // Validating the data
    let validarTitulo = !validator.isEmpty(params.title) && validator.isLength(params.title, { min: 1, max: 100 });
    let validarContenido = !validator.isEmpty(params.content) && validator.isLength(params.content, { min: 1, max: 150 });
  
    if (!validarTitulo || !validarContenido) {
      let errors = [];
      if (!validarTitulo) {
        errors.push({ field: "title", message: "El título es inválido." });
      }
      if (!validarContenido) {
        errors.push({ field: "content", message: "El contenido es inválido." });
      }
      return res.status(400).json({
        status: "Error",
        mensaje: "No se ha validado la información",
        errors,
      });
    }
  
}


module.exports = {
    validarArticulo
}
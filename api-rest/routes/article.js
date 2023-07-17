const express = require("express");
const router = express.Router();
const multer = require('multer');
const articleController = require("../controllers/article");

// donde guardo mis archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './imagenes/articulos')
    },

    filename: (req, file, cb) => {
        cb(null, "article" + Date.now() + file.originalname)
    }
})

const subidas = multer({storage: storage});


//Test Route
router.post("/save", articleController.saveArticle);
router.get("/get-articles/:ultimos?", articleController.getArticles)
router.get("/get-article/:id", articleController.getArticleById)
router.delete("/delete-article/:id", articleController.deleteArticle)
router.put("/update-article/:id", articleController.updateArticle)
router.post("/upload-image/:id", [subidas.single("file")], articleController.uploadImage)




module.exports = router;

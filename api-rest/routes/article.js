const express = require("express");
const router = express.Router();

//Controller
const articleController = require("../controllers/article");

//Test Route
router.post("/save", articleController.saveArticle);
router.get("/get-articles/:ultimos?", articleController.getArticles)
router.get("/get-article/:id", articleController.getArticleById)
router.delete("/delete-article/:id", articleController.deleteArticle)
router.put("/update-article/:id", articleController.updateArticle)




module.exports = router;

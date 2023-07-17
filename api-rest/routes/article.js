const express = require("express");
const router = express.Router();

//Controller
const articleController = require("../controllers/article");

//Test Route
router.post("/save", articleController.saveArticle);
router.get("/get-articles/:ultimos?", articleController.getArticles)




module.exports = router;

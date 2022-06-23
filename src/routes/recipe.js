const express = require("express");
const router = express.Router();

const { add, getAllRecipe, update } = require("../controller/recipeController");
const upload = require("../middleware/multer");

router
    .post("/", upload.fields([{
        name: "recipePhoto", maxCount: 1
    }, {
        name: "recipeVideo", maxCount: 1
    }]), add)
    .get("/", getAllRecipe)
    .put("/:id", upload.fields([{
        name: "recipePhoto", maxCount: 1
    }, {
        name: "recipeVideo", maxCount: 1
    }]), update);

module.exports = router;

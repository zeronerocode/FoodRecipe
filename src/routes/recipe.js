const express = require("express");
const router = express.Router();

const { add, getAllRecipe, update, getDetRecipe, deleteRecipe } = require("../controller/recipeController");
const upload = require("../middleware/multer");
// const {protect} = require("../middlewares/auth");

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
    }]), update)
    .delete("/:id", deleteRecipe)
    .get("/:id",getDetRecipe);

module.exports = router;

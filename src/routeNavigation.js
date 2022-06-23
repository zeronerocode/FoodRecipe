const router = require("express").Router();
require("dotenv").config();
const recipe = require("./routes/recipe");

router.use("/recipe", recipe);

module.exports = router;

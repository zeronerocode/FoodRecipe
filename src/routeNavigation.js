const router = require("express").Router();
require("dotenv").config();
const recipe = require("./routes/recipe");
const users = require("./routes/users");

router.use("/recipe", recipe);
router.use("/users/", users);

module.exports = router;

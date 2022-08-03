const express = require("express");
const router = express.Router();
const { register, login, userLogout } = require("../controller/users.js");
const { protect } = require("../middleware/auth.js");

router
  .post("/register", register)
  .post("/login", login)
  .get("/logout", protect, userLogout);
  // .get('/profile', protect, profile)
//   .post("/refresh-token", refreshToken)
//   .delete("/:id", delUser);

module.exports = router;
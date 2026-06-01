const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user/userController');
const auth = require('../../middleware/auth')




router.post("/", userController.createUser);
router.get("/", auth, userController.getAllUsers);
router.get("/:id",auth, userController.getUserById);
router.patch("/:id",auth, userController.updateUser);
router.delete("/:id",auth, userController.deleteUserById);

module.exports = router;

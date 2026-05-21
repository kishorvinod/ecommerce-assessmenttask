const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user/userController');




router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id",userController.getUserById);
router.patch("/:id",userController.updateUser);
router.delete("/:id",userController.deleteUserById);

module.exports = router;

const express = require("express");
const {
    createUserController,
    getAllUsersController,
    editUserController,
    getSingleUserController
} = require("../controllers/userController");
const router = express.Router();

router.post("/api/create-user", createUserController);
router.get("/api/users", getAllUsersController);
router.get("/api/user/:id", getSingleUserController);
router.put("/api/edit-user/:id", editUserController);

module.exports = router;
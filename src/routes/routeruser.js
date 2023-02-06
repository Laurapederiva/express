const express = require("express");
const {getAllUsers, getUserId, search, forNewUser, postUser, userEdit, editConfirm} = require("../controllers/userControllers");
const routerUser = express.Router();

const path = require("path");

routerUser.get("/users", getAllUsers);
routerUser.get("/user/:id", getUserId);
routerUser.get("/search", search);

routerUser.get("/new-user", forNewUser);
routerUser.post("/new-user", postUser);

routerUser.get("/user-edit/:id", userEdit);
routerUser.put("/user-edit", editConfirm);



module.exports= routerUser;
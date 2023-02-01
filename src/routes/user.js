const express = require("express");
const {getAllUsers, getUserId, getUserByName} = require("../controllers/userControllers");
const routerUser = express.Router();

const path = require("path");

routerUser.get("/users", getAllUsers);
routerUser.get("/user/:id", getUserId);
routerUser.get("/userbyname/:name", getUserByName);




module.exports= routerUser;
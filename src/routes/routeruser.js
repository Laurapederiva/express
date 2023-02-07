const express = require("express");
const {getAllUsers, getUserId, search, forNewUser, postUser, userEdit, editConfirm} = require("../controllers/userControllers");
const routerUser = express.Router();

const path = require("path");
const multer= require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/usuarios"))
    },
    filename: (req, file, cb) => {
        const newFile = `user-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newFile);
    }
});
const upload= multer({storage});

routerUser.get("/users", getAllUsers);
routerUser.get("/user/:id", getUserId);
routerUser.get("/search", search);

routerUser.get("/new-user", forNewUser);
routerUser.post("/new-user", upload.single("img"), postUser);

routerUser.get("/user-edit/:id", userEdit);
routerUser.put("/user-edit",  upload.single("img"), editConfirm);



module.exports= routerUser;
const express = require("express");
const morgan = require("morgan");

const routerMain = require("./src/routes/main");
const routerUsers= require("./src/routes/user");

const port = process.env.PORT || 3031;

const app = express();

app.use(morgan("dev"));
app.use(routerMain);
app.use(routerUsers);

app.listen(port, () => {
    console.log(`servidor escuchando en puerto ${port}`);
}); 
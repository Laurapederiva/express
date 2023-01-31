const express = require("express");

const port = process.env.PORT || 3031;

const app = express();


app.listen(port, () => {
    console.log(`servidor escuchando en puerto ${port}`);
}); 
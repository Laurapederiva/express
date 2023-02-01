
const index = (req, res) => {
    res.send("<h1>Bienvenido a la app de express</h1>")
}

const about = (req, res) => {
    res.send("<h1>Somos express</h1>")
}



module.exports = {
    index,
    about
}

const express = require ('express')
const movieRoutes = require('./routes/crud_appi_routes')

const app = express()

const port = 3000

app.get ('/', (req,res) => {
    res.send ('Hello world')
})

app.use ("/movie", movieRoutes);


app.listen(port, () => {
    console.log(`CRUD app listening on port ${port}`)
})
const express = require ('express')

const app = express()

const port = 3000

app.get ('/', (req,res) => {
    res.send ('Hello world')
})

// CRUD function for crud-api

// R - for Reading
app.get ('/movie', ()=>{

})

// c - for creating
app.post('/movie',()=>{

})

// U - for Updating

app.put ('/movie/:id', ()=>{

})

// D - for deleting
app.delete('/movie/:id', ()=>{

})


app.listen(port, () => {
    console.log(`CRUD app listening on port ${port}`)
})
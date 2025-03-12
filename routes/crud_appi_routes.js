const express = require ('express')

const router = express.Router()

// CRUD function for crud-api

// R - for Reading
router.get ('/', (req,res)=>{
      res.send('Get all data for crud-api')
})

// c - for creating
router.post('/movie',()=>{

})

// U - for Updating

router.put ('/movie/:id', ()=>{

})

// D - for deleting
router.delete('/movie/:id', ()=>{

})

module.exports = router
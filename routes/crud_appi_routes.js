const express = require ('express')
const {CrudIndex,CreateCrud,UpdateCrud,DeleteCrud} = require("../controllers/crud_controller")

const router = express.Router()

// CRUD function for crud-api

// R - for Reading
router.get ('/', CrudIndex );

// c - for creating
router.post('/', CreateCrud)

// U - for Updating

router.put ('/:id', UpdateCrud)

// D - for deleting
router.delete('/:id', DeleteCrud)

module.exports = router
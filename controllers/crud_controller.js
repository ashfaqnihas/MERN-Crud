const CrudIndex =  (req, res) =>{
    res.send('Get all data for crud-api')
}

const CreateCrud = (req, res) =>{
    res.send('Create all data for crud-api')
}

const UpdateCrud = ( req,res) => {
    res.send ("Update data for Crud Api")
}

const DeleteCrud = (req, res ) => {
    res.send ("Delete Data from Crud Api")
}


module.exports = {
    CrudIndex,
    CreateCrud,
    UpdateCrud,
    DeleteCrud

};
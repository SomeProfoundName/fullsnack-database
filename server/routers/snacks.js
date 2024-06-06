//access router functionality from express
const { Router } = require('express')

//add the controller
const snackController = require('../controllers/snacks')

//initiate router
const snackRouter = Router()

//define endpints
snackRouter.get('/', snackController.index);
snackRouter.get('/:id', snackController.show);
snackRouter.post('/', snackController.create);

module.exports=snackRouter
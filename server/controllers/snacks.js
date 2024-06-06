const Snack = require('../models/Snack');

async function index(req, res) {
    try {
        const snacks = await Snack.getAll();
        console.log('controller' + snacks)
        res.status(200).json(snacks)
    } catch(err) {
        res.status(500).json({error:err.message})
    }
}

async function show(req, res) {
    try {
        let id = parseInt(req.params.id)
        const snack = await Snack.getSnackById(id);
        res.status(200).json(snack)
    } catch(err) {
        res.status(404).json({error:err.message})
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        console.log(data);
        const newSnack = await Snack.create(data)
        res.status(201).json(newSnack)
    } catch(err) {
        res.status(400).json({error:err.message})
    }
}

module.exports={ index, show, create }


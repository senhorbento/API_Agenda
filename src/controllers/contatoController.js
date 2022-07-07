const express = require('express');

const Contato = require('../models/contato');

const router = express.Router();

router.post('/register', async(req, res) =>{
    try{
        const contato = await Contato.create(req.body);

        return res.send({contato});
    }
    catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});

module.exports = app => app.use('/creat', router);
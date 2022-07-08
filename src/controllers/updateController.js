const router = require('express').Router();

const Contato = require('../models/contato');

router.patch('/update/:id', async(req, res) =>{
    const id = req.params.id;
    try{
        const contatoAtualizado = await Contato.updateOne({_id: id}, req.body);
        if(!contatoAtualizado)
            return res.status(200).send({mensagem: 'Contato não atualizado!'});
        return res.status(200).send({mensagem: 'Contato atualizado com sucesso!'});
    }
    catch (err){
        return res.status(400).send({erro: err});
    }
});

module.exports = app => app.use(router);
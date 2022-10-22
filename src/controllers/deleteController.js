const router = require('express').Router();

const Contato = require('../models/contato');

router.delete('/delete/:id', async(req, res) =>{
    const id = req.params.id;
    try{
        const contatoDelete = await Contato.deleteOne({_id: id});
        if(contatoDelete.matchedCount == 0)
            return res.status(422).send({mensagem: 'Contato não foi encontrado!'});
        return res.status(200).send({mensagem: 'Contato excluido com sucesso!'});
    }
    catch (err){
        return res.status(400).send({erro: err});
    }
});

module.exports = app => app.use(router);
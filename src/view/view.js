const router = require('express').Router();
const { request } = require('https');

const path = require("path");
const fs = require("fs")

const data = fs.readFileSync(path.resolve(__dirname, "./view.html"));

router.get('/', (req, res) => {
    res.send(data.toString());
}); 

module.exports = app => app.use(router);
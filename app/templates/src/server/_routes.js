var router = require('express').Router();
var data = require('./data');

router.get('/example', getExample);
router.get('/example/:id', getExampleId);

module.exports = router;

// Designed for front-end development

function getExample(req, res, next) {
    res.status(200).send(data.people);
}

function getExampleId(req, res, next) {
    var id = +req.params.id;
    var example = data.example.filter(function(p) {
        return p.id === id;
    })[0];

    if (example) {
        res.status(200).send(example);
    } else {
        res.status(200).send('NOT FOUND THIS ID');
    }
}

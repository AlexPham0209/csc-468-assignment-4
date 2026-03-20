const path = require('path');
const Shark = require('../models/shark');

const create = (req, res) => {
    var newShark = new Shark(req.body);
    console.log(req.body);
    newShark.save()
        .then(() => res.redirect('/sharks/getshark'))
        .catch((err) => res.status(400).send('Unable to save shark to database'));
};

const list = (req, res) => {
    Shark.find({})
        .then((sharks) => res.render('get_shark.html', { sharks: sharks }))
        .catch((err) => res.send(500, err));
};

const index = (req, res) => {
    res.sendFile(path.resolve('src/views/sharks.html'));
};

module.exports = {create, list, index};
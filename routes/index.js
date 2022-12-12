const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    let name = req.body.username;
    if (os.userInfo().username === name) {
        res.redirect('/present?name='+name);
    } else {
        res.redirect('/absent?name='+name);
    }
});

module.exports = router;
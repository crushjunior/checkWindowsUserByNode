const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('present',{name: req.query.name});
});

module.exports = router;
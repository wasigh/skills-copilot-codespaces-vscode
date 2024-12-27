// create webserver
const express = require('express');
const router = express.Router();

// create a route for /comments
router.get('/comments', (req, res) => {
    res.send('Comments page');
});

module.exports = router;
// create a route for /comments

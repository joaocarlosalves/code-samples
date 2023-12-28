const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
    fs.readFile(`./static/people.json`, 'utf8', (err, data) => {
        const jsonObject = JSON.parse(data);
        res.json(jsonObject);
    });
});

module.exports = router;
const router = require('express').Router();
const validator = require('validator');
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        next();
    } else res.sendStatus(403);
};

router.post('/token', checkToken, async (req, res) => {
    await jwt.verify(req.token, 'secretToken', (erro, auth) => {
        if(erro) res.sendStatos(403);
        else res.json({ mensagem: "Ok", auth });        
    });
});

router.post('/', async (req, res) => {
    if(validator.isEmpty(req.body.email)) res.send('Digite seu email');
    else if(!validator.isEmail(req.body.email)) res.send('Digite um email válido');
    else {
        const user = { email: req.body.email, senha: req.body.senha };

        await jwt.sign({user}, 'secretToken', { expiresIn: '60s'}, (erro, token) => {
            if(!erro) res.json({ token });
            else res.sendStatos(403);           
        });        
    }
});

module.exports = router;
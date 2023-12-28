const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const routes = {
    auth: require('./routes/auth'),
    users: require('./routes/users'),
    people: require('./routes/people'),
    peoplepag: require('./routes/people-pag')
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', routes.auth);
app.use('/users', routes.users);
app.use('/people', routes.people);
app.use('/people-pag', routes.peoplepag);

app.listen(3000);
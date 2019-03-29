const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const PORT = process.env.PORT || 4200;

//покдлючаем базу данных
const config = require('./database/DB');

//подключаем роутер
const serverRouting = require('./routes/serverBookRouter');
const users = require('./routes/user');

//ожидаем, что подключимся к БД
mongoose.connect(config.DB).then(
    () => {console.log(`База данных подключена`)}, //если успешно
    err => {console.log(`Нет подключения к базе данных ${err}`)} //если неудачно
);

app.use(passport.initialize());
require('./passport')(passport);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hello');
});

app.use('/book', serverRouting);

app.use('/api/users', users);

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту`);
});

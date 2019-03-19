const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

//покдлючаем базу данных
const config = require('./database/DB');
//подключаем роутер
const serverRouting = require('./routes/serverBookRouter');

//ожидаем, что подключимся к БД
mongoose.connect(config.DB).then(
    () => {console.log(`База данных подключена`)}, //если успешно
    err => {console.log(`Нет подключения к базе данных ${err}`)} //если неудачно
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/book', serverRouting);

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту`);
})

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 4200;

//покдлючаем базу данных
const config = require('./database/DB');

//подключаем роутер
const serverRouting = require('./routes/serverBookRouter');
const users = require('./routes/user');
const postRoute = require('./routes/postRoute')

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
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('hello');
});

app.post('/upload', (req, res, next) => {
    //console.log(req);
    let imageFile = req.files.file;
    console.log(imageFile)
    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json({file: `public/${req.body.filename}.jpg`});
    });

})

app.use('/book', serverRouting);

app.use('/api/users', users);

app.use('/posts', postRoute);

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту`);
});

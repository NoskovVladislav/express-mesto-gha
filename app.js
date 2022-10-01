const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerErrorWay = require('./routes/errorsway');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '622458d61f7bc162137cd177', //   _id созданного пользователя
  };

  next();
});
// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(routerErrorWay);

app.listen(PORT);

require('dotenv').config();


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const hbs = require('hbs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const animalRouter = require('./routes/animal');

// const{ addToLocals } = require('./middleware/allMiddleware')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// https://nodejsdev.ru/guide/express-handlebars-partial/
hbs.registerPartials(__dirname + '/views/partials');

app.use(
  session({
    secret: process.env.SESSION_SECRET ?? 'snovaisnova', // строка для шифрования сессии
    resave: false, // не пересохраняем сессию если не было изменений
    saveUninitialized: false, // не сохраняем сессию если она пустая
    cookie: { secure: false }, // не HTTPS
    name: 'login', // имя сессионной куки
    store: new FileStore(), // хранилище для куков - папка с файлами
  }),
);




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/animal',animalRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`${PORT} POEHALI`);
})

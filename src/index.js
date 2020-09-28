const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

//Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'secreturi'
}));
app.use(flash());

//Global Variables
app.use((req, res, next) => {
    app.locals.message = req.flash('success');
    next();
});

//Routes
app.use(require('./routes/index'));


app.listen(3000, () => {
    console.log('Server on port', 3000);
})
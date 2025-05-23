require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookierParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const methodoverride = require('method-override');
const connectDB = require('./server/config/db');
const session = require('express-session');
const  {isActiveRoute} = require('./server/helpers/routeHelpers');

const app = express();
const port = 3000 || process.env.PORT;

//connect to database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookierParser());
app.use(methodoverride('_method'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI

    }),
}));

app.use(express.static('public'));

//template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.locals.isActiveRoute = isActiveRoute;

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(port, () => {
    console.log(`Server is running on port 'http://localhost:${port}'`);
});

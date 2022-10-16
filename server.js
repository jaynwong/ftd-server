// Importing modules
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const { dbURI } = require('./config/database/conn.js');

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

/*
 * ---------- APPLICATION SETUP ----------
 */
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    credentials: true,
    optionsSuccessStatus: 200,
    // Change this origin to front end url in production
    origin: [
        'http://127.0.0.1:3000',
        'http://localhost:3000'
    ],
    exposedHeaders: ['Set-Cookie']
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
 * ---------- SESSION SETUP ----------
 */
app.set('trust proxy', 1);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production' ? true : false,
        httpOnly: true,
        maxAge: 1 * 60 * 60 * 1000 // 1 hour = 60 minutes * 60 seconds * 1000 ms
    },
    store: MongoStore.create({
        mongoUrl: dbURI,
        dbName: 'foodtodo',
        collectionName: 'sessions'
    })
}));


/*
 * ---------- PASSPORT SETUP ----------
 */

const passport = require('./config/passport.js');
app.use(passport.initialize());
app.use(passport.session());

/*
 * ---------- APPLICATION ROUTING ----------
 */
const { itemRouter } = require('./routes/itemRouter.js');
const { userRouter } = require('./routes/userRouter.js');
const { Cookie } = require('express-session');

app.use('/item', itemRouter);
app.use('/user', userRouter);

/*
 * ---------- OPEN THE SERVER TO LISTEN FOR CONNECTION ----------
 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
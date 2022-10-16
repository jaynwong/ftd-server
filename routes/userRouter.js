const express = require('express');
const passport = require('../config/passport.js');
const userController = require('../controllers/users');

const userRouter = express.Router();

userRouter.post('/login', (req, res, next) => {
    passport.authenticate('user-login', (err, user) => {
        if (err) throw err;
        if (!user) res.send(false);
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                // res.cookie('_id', '123', { path: '/', secure: true, sameSite: 'none' });
                res.send(user);
                console.log(req.sessionID);
            })
        }
    })
    (req, res, next);
});

userRouter.post('/register', userController.registerUser);

userRouter.post('/logout', (req, res, next) => {
    req.logout(false, (err) => {
        if (err) return next(err);
    });
    // req.session.destroy();
    res.send(`You've been logged out!`);
})

// To check if the user credentials exist in the request
userRouter.get('/protected', (req, res, next) => {
    console.log(req.session);
    if (req.isAuthenticated()) {
        res.send(true);
    } else {
        res.send(false);
    }
});

module.exports = { userRouter }
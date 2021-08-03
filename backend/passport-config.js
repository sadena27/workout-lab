const User = require('./models/user.model')
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(
        new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
            },
            function(email, password, done) {
                User.findOne({'email': email}, (err, user) => {
                    if (err) {
                        throw err;
                    }

                    if (user) {
                        bcrypt.compare(password, user.password, (err, result) => {
                            if (err) {
                                throw err;
                            }

                            if (result === true) {
                                return done(null, user);
                            } else {
                                return done(null, false);
                            }
                        })
                    } else {
                        return done(null, false);
                    }
                })
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            cb(err, user);
        })
    });
}


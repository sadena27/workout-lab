const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('./models/user.model');

require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(passport.initialize());
app.use(passport.session());

require('./passport-config')(passport);


// User login/sign up routes
app.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            throw err;
        }
        if (user) {
            req.login(user, err => {
                if (err) {
                    throw err;
                }
                res.send("Successfully logged in");
            })
        } else {
            res.send("No user exists");
        }
    })(req, res, next);
});

app.post('/signup', (req, res) => {
    User.findOne({"email": req.body.email}, async (err, doc) => {
        if (err) {
            throw err;
        }

        if (doc) {;
            res.send("User already exists")
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword,
            });

            await newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        }
    })
});

app.get('/user', (req, res) => {
    res.send(JSON.stringify(req.user));
});

app.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy(function (err) {
        if (err) {
            return next(err);
        }
        // The response should indicate that the user is no longer authenticated.
        return res.send({ authenticated: req.isAuthenticated() });
    });
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const workoutsRouter = require('./routes/workouts');

app.use('/workouts', workoutsRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const express = require('express');
const app = express();
const path = require('path');

// routes
const admin = require('./src/routes/admin');
const subjects = require('./src/routes/subject');
const professions = require('./src/routes/profession');
const articles = require('./src/routes/articles');
const pages = require('./src/routes/pages');

//modules and middlewares
const Login = require('./src/modules/login');
const checkAdmin = require('./src/middlewares/checkAdmin');

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorizeition");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    next();
});

const port = 3050;

app.listen(port, (req, res) => {
    console.log(`server is running...`)
});


app.use(express.json());
//app.use(express.static('../client/build'));

app.get('/' , (req, res) => {
    res.json({
        message: "wellcom"
    })
  // res.sendFile(__dirname,"client", "build", "index.html");
});

app.post('/login',async (req, res) => {
    try {
        const { email, password } = req.body;
        const message = await Login.userLogin(email, password);
        res.status(200).json(message);

    } catch (error) {
        console.log(error);
    }
});

app.use('/admin',admin);

app.use('/subject', subjects);

app.use('/profession', professions);

app.use('/articles', articles);

app.use('/pages', pages);
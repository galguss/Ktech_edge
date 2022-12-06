const express = require('express');
const app = express();

// routes
const admin = require('./src/routes/admin');
const subjects = require('./src/routes/subject');
const professions = require('./src/routes/profession');
const articles = require('./src/routes/articles');
const pages = require('./src/routes/pages');

//modules and middlewares
const Login = require('./src/modules/login');
const checkAdmin = require('./src/middlewares/checkAdmin');

const port = process.env.PORT;

app.listen(port, (req, res) => {
    console.log(`server is running...`)
});

app.use(express.json());
app.use(express.static('public'));

app.get('/' , (req, res) => {
    res.json({
        message: 'hello word'
    })
});

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const message = await Login.userLogin(email, password);
        res.status(200).json(message);

    } catch (error) {
        console.log(error);
    }
});

app.use('/admin', checkAdmin, admin);

app.use('/subject', subjects);

app.use('/profession', professions);

app.use('/articles', articles);

app.use('/pages', pages);
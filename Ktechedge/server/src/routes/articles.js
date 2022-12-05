const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');
const checkAdmin = require('../middlewares/checkAdmin');
const checkAuth = require('../middlewares/checkAdmin');


const article = require('../modules/articles');
const users = require('../modules/users');
const subjects = require('../modules/subjects');
const professions = require('../modules/professions');
const pages = require('../modules/pages');

router.get('/', async (req, res) => {
    try {
       let user = await users.getUserName();
       let subject = await subjects.getAllSubject();
       let profession = await professions.getAllProfession();
       let articles = await article.getAllArticles();
       let page = await pages.getAllPage(); 

       for(let key of articles){
            key.subject_id = subject[key.subject_id];
            key.profession_id = profession[key.profession_id];
            key.page_id = page[key.page_id];
            key.the_solver = user[key.the_solver];
            key.file_to_solve = page[key.file_to_solve];
            key.the_tester = user[key.the_tester];
       }

       res.status(200).json({
            message: articles
        });

    } catch (error) {
        res.status(401).json({
            message: `${error}`
        });
    }
});

router.post('/', checkAdmin, upload.single('page') ,async (req, res) => {
    try {
        const { filename: page } = req.file;
       console.log(req.file);
        const { subject_id, profession_id, season_and_Question_numner, level } = req.body;
        
       await article.createArticle(page, subject_id, profession_id, season_and_Question_numner, level);

        res.status(200).json({
            message: "article created!"
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: `${error}`
        });
    }
});

router.patch('/', checkAuth, async (req, res) => {
    try {
        const { id, column, newValue } = req.body;
        await article.updateArticle(id, column, newValue);

        res.status(200).json({
            message: "article updated!"
        });

    } catch (error) {
        console.log(error);
    }
});

router.delete('/', checkAdmin, async (req, res) => {
    try {
        const { id } = req.body;
        await article.deleteArticle(id);

        res.status(200).json({
            message: "article deleted!"
        })
    } catch (error) {
        console.log(error);
    }
})




module.exports = router;
const express = require('express');
const router = express.Router();

const subjectDB = require('../modules/subjects');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', async (req, res) => {
    let subjects = await subjectDB.getAllSubject();
    res.status(200).json({subjects});
});

router.post('/', checkAdmin, async (req, res) => {
    try {
        const { subject } = req.body;
        await subjectDB.createSubject(subject);

        res.status(200).json({
            message: "subject created!"
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch('/', checkAdmin, async (req, res) => {
    try {
        const { newSubject, id } = req.body;
        await subjectDB.updateSubject(newSubject, id);

        res.status(200).json({
            message: "subject Updated!"
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/', checkAdmin, async (req, res) => {
    try {
        const { id } = req.body;
        await subjectDB.deleteSubject(id);

        res.status(200).json({
            message: "subject deleted!"
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;
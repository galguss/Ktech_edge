const express = require('express');
const router = express.Router();

const professionDB = require('../modules/professions');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', async (req, res) => {
   let professions = await professionDB.getAllProfession();

    res.status(200).json({
        professions
    });
});

router.post('/', checkAdmin, async (req, res) => {
    try {
        const { profession } = req.body;
        await professionDB.createProfession(profession);

        res.status(200).json({
            message: "profession created!"
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch('/', checkAdmin, async (req, res) => {
    try {
        const { newprofession, id } = req.body;
        
        await professionDB.updateProfession(newprofession, id);

        res.status(200).json({
            message: "profession Updated!"
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/', checkAdmin, async (req, res) => {
    try {
        const { profession } = req.body;
        await professionDB.deleteProfession(profession);

        res.status(200).json({
            message: "profession deleted!"
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;
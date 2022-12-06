const util = require('util');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const User = require('../modules/users');

const bcryptHash = util.promisify(bcrypt.hash);


router.get('/', async (req, res) => {
    try {
        let [users, _] = await User.getAllUsers();
        res.status(200).json({message: users});
    } catch (error) {
        console.log(error);
    }
});


router.post('/', async (req,res) => {
    try {
        const { email, password, github, full_name, level } = req.body;
        const newPassword = await bcryptHash(password, 10);
        await User.createUser(email, newPassword, github, full_name, level);
        res.status(201).json({ message: "User Created"});
    } catch (error) {
        console.log(error)
    }
});

router.patch('/', async (req, res) => {
    try {
        const { column, oddValue, newValue } = req.body;
        await User.updateUser(column, oddValue, newValue,);
        res.status(201).json({ message: 'user updated'});
    } catch (error) {
        console.log(error);
    }
});

router.delete('/', async ( req, res ) => {
    try {
        const {full_name} = req.body;
        await User.deleteUser(full_name);

        res.status(201).json({
            message: "user deleted"
        });
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;
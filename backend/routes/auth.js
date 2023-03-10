const express = require('express');
const validate_token = require('../modules/auth_modules/validate_token');
const register = require('../modules/auth_modules/register');
const login = require('../modules/auth_modules/login');
const change_password = require('../modules/auth_modules/change_password');
const reset_password = require('../modules/auth_modules/reset_password');

const router = express.Router();

router.get('/', validate_token, (req, res)=>{
    const user = req.user;
    if(user){
        res.json({user: {name: user.name, username: user.username, email: user.email, role: user.role}});
    }else{
        res.status(400).json({error : "Invalid Token"});
    }
});

router.post('/login',login);
router.post('/register', [validate_token, register, login]);
router.post('/change_password', validate_token, change_password);
router.post('/resetpassword', validate_token, reset_password);



module.exports = router;
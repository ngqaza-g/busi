const User = require('../../models/User');
const error_msg = require('../error/error_message');

const register = async (req, res, next)=>{
    // if(req.user){
        const {name, username, email, password} = req.body;
        try{
            const newUser = await User.create({
                name,
                username, 
                email,
                password
            });
            next();
        }catch(error){
            res.status(400).json({error: error_msg(error)});
        }
    // }
}


module.exports = register;
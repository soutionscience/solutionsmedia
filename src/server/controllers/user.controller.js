const user = require('../models/user.model');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.post = function(req, res, next){
    let password = bcrypt.hashSync(req.body.password, 10);
    let  newUser = new user({username: req.body.username, password:password, email: req.body.email})
   newUser.save(function(err, resp){
       if(err) throw err;
       res.status(200).send({status: 'user created'})
   })

}
exports.get = function(req, res){
 user.find({}, function(err, resp){
        if(err) throw err;
        res.status(400).json(resp)
    })

}

exports.authenticate = function(req, res){
    const myUser = req.body;

    user.findOne({username: myUser.username}, function(err, result){
        if(!result){
            return res.status(404).json({err:'user not found'})
        }
        if(!bcrypt.compareSync(myUser.password, result.password)){
            return res.status(401).json({error: 'incorrect password'})
        }
        const payload ={
            username: result.username
        }
        const token = jwt.sign(payload, process.env.secrete, {expiresIn: '2h'})
     return res.json({
         message:"authenticated user",
         token: token
     })
    })


}
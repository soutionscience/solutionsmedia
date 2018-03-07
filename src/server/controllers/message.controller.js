let  message = require('../models/messages')

exports.post = function(req, res){
    let msg = new message(req.body)
    msg.save(function(err, resp){
        if(err) throw err;
        res.status(201).json(resp)
    })
}

exports.get = function(req, res){
    message.find({}, function(err, resp){
        if(err) throw err;
        res.status(400).json(resp)
    })
}
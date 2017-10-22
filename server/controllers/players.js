var mongoose = require('mongoose');
var Player = mongoose.model('players');
var path = require('path');

module.exports = {
    
    show: (req,res,next) => {
        Player.find({}, function(err, results){
            if(err) { 
                res.json(err);
            } else {
                res.json(results);
            }
        });
    },
    create: (req,res,next) => {
        Player.create(req.body, function(err){
            if(err) { 
                res.json(err);
            } else {
                res.json({message:"Creation Success"});
            }
        });
    },

    remove: (req,res,next) => {
        Player.remove({_id: req.params.id}, function(err){
            if(err) { 
                res.json(err); 
            } else {
                res.json({message:"Delete Success"});
            }
        });
    },

    update: (req, res) => {
        let num = req.body.game - 1;
        Player.findById({_id: req.params.id}, (err, player) => {
            if(player){
                console.log(player)
                console.log(player.game[num].status)
                player.game[num].status = req.body.status
                console.log(player.game[num].status)
                player.save((err) => {
                    if(err){
                        return res.send(err)
                    }
                    return res.json({message: 'Player updated!'})
                })
            }
            else{
                console.log('error')
            }
        });
    }
}
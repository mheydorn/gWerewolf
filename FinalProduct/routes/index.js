var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Game = mongoose.model('Game');


router.post('/createGame',function(req,res,next){
	console.log("In Create Game Route POST");
	var game = new Game(req.body);
	game.save(function(err,game){
		if(err){return next(err);}
		res.json(game);
	});
});
router.get('/getGame',function(req,res,next){
	var q = req.query.q;
	console.log("In getGame route with q = " + q);
	Game.find({name: q},function(err,games){
		if(err){return next(err);}
		res.json(games);
	});
});
router.get('/getAllGames',function(req,res,next){
        console.log("Getting ALL games");
        Game.find(function(err,games){
                if(err){return next(err);}
                res.json(games);
        });
});

router.get('/joinGame',function(req,res,next){
	console.log("In join Game route");
	var q = req.query.q;
	var pid;
	Game.find({name: q},function(err,games){
		if(err){return next(err);}
		//res.json(games);
		pid = games[0]['_id'];
	        Game.findById(pid,function(err,games){
        	        if(err){return next(err);}
                	res.json(games);
               	 	games.incrementPlayers();
        	});
	});
});
module.exports = router;

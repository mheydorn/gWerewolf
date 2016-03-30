var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
  name: String,
  players: {type: Number, default: 0}
});
GameSchema.methods.incrementPlayers = function(cb){
	this.players += 1;
	this.save(cb);
};
mongoose.model('Game', GameSchema);

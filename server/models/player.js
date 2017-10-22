var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is Required!"], minlength: [4, "Player Name must be at least 4 characters long!"]},
    position: { type: String },
    game1: {
        type: Number,
        default: 0,
      },
      game2: {
        type: Number,
        default: 0,
      },
      game3: {
        type: Number,
        default: 0,
      }}, {timestamps: true});

var Player = mongoose.model('players', PlayerSchema);
module.exports = Player;
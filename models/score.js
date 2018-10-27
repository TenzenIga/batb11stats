const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const playersSchema = mongoose.Schema({
    name: String,
    tricks: [String]
})


const GameSchema = new Schema({
  id: Number,
  players: [playersSchema],
  winner:{
    name:String,
    team: String
  },
  date:{
    type:Date
  },
  duration: Number
});
module.exports.addGame = function(){
  console.log('hi');
}

const Game= module.exports = mongoose.model('Game', GameSchema);

const express = require('express');

const router = express.Router();
// Item Model
const Game = require('../../models/score');
const addGame = require('../../models/score');
// @route Get api/games
//@desc get all games
//@access Public
router.get('/', (req, res)=>{
  Game.find()
    .then(games => res.json(games))
});

/*
// @route POST api/games
//@desc post game info
//@access Private
router.post('/', (req, res) =>{
  if(req.body.password === password){
  const players = req.body.players;
  const newGame = new Game({
    id:req.body.id,
    winner:req.body.winner,
    date:req.body.date,
    duration:req.body.duration
  })
  players.forEach(player => newGame.players.push(player))

  newGame.save(err=>{
    if(err){
      console.log(err);
      res.json(err);
    }else{
      res.json({success:true, msg:'Game added'});
    }
  });
}else{
  res.json('wrong pswd');
}
})
*/
module.exports = router;

import React from 'react';

import {Bar} from 'react-chartjs-2';

function findBestPlayer( playerOne ,gameDuration, playerTwo) {
    return Math.abs(playerOne.length - playerTwo.length) * gameDuration;
}
const BestSkaters = (props) => {
  const {data} = props;
  let players = data.map(game => {
    return  { winner:game.winner, score: findBestPlayer(game.players[0].tricks, game.duration, game.players[1].tricks) }
  })

const topSkaters = players.filter(player => player.score > 600);
const dataset = {
  labels: topSkaters.map(t => t.winner.name),
  datasets: [
    {
      label: 'MVP',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data:topSkaters.map(t => t.score)
    }
  ]
};

  return (

      <div className="charts charts_players">
        <h2 className='heading'>Best skaters</h2>
        <p>According to formula: <span className='formula'>(tricks landed - tricks missed) <b>X</b> game duration</span></p>
        <Bar data={dataset}
        width={500}
        />
      </div>


  )
}

export default BestSkaters;

import React from 'react'

import Table from './table';
const Score = (props) => {
  const score = props.score;
  const scoreMo = score.filter(game => game.winner.team === 'Mo').length;
  const scoreCrob = score.filter(game => game.winner.team === 'Crob').length;
  return (
    <div className='table'>
<div className="table_score">
<h1 className="table_score_teamMo">Team Mo - {scoreMo}</h1>
<h1 className="table_score_teamCrob">Team Crob - {scoreCrob}</h1>
</div>
<Table />
    </div>
  )
}


export default Score;

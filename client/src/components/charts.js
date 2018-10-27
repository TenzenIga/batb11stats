import React from 'react';
import {Pie} from 'react-chartjs-2';
import Tricks from './tricks';
import BestSkaters from './bestSkaters';
import RoundsPanel from './roundsPanel';

const Charts  = (props) => {
  const score ={
    mo:props.data.filter(game => game.winner.team === 'Mo').length,
    crob:props.data.filter(game => game.winner.team === 'Crob').length
  }
  const data = {
    labels:[
      'Team Mo',
      'Team Crob'
    ],
    datasets:[{
       data:[score.mo , score.crob],
       backgroundColor:[
         '#333d67',
         '#c07121'
       ]
     }]
  };

  return (
    <div className='charts_wrapper' >
      <RoundsPanel />
  <h2 className='heading' >Score</h2>
  <div className='table_score'>
    <h3 className="table_score_teamMo">Team Mo - {score.mo}</h3>
    <h3 className="table_score_teamCrob">Team Crob - {score.crob}</h3>
  </div>

  <div className='charts charts_pie'>
    <Pie data={data}
      width={100}
    	options={{
    		maintainAspectRatio: false
    	}}/>
  </div>

<Tricks data={props.data}/>
<BestSkaters data={props.data} />

    </div>
  )
}

export default Charts;

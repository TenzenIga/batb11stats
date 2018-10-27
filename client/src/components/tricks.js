import React from 'react'
import {HorizontalBar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';


function setTricks(arr, trick) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].trick === trick){
        arr[i].count++;
        return;
      }
    }
    arr.push({trick, count:1})
}

const Tricks = (props) => {

const {data} = props;

let tricks = data.reduce((prevgame, game) =>{
  return [...prevgame, ...game.players[0].tricks, ...game.players[1].tricks]}, []);

let countedTricks = [];
tricks.forEach(trick =>{
    setTricks(countedTricks ,trick)
})


  const dataset = {
    labels: countedTricks.map(t => t.trick),
    datasets: [
      {
        label: 'count',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data:countedTricks.map(t => t.count)
      }
    ]
  };

let topTricks = countedTricks.filter(item => item.count >= 4)

const topTricksData = {
  labels: topTricks.map(t => t.trick),
  datasets: [
    {
    data:topTricks.map(t => t.count),
    backgroundColor:[
      'gold',
      'red',
      'blue',
      'grey',
      'green',
      'orange'
    ]
    }
  ]
};
  return (
    <div className='charts'>
      <div className='charts charts_allTricks'>
          <h2 className='heading'>All missed tricks</h2>
          <HorizontalBar data={dataset}
            width={500}
            height={1500}
            options={{
      maintainAspectRatio: false
    }}
     />
 </div>
    <div className='charts charts_topTricks'>
      <h2 className='heading' >Top tricks to get letter</h2>
    <Doughnut
       data = {topTricksData}
       width={100}
      options={{
        maintainAspectRatio: false
      }}
      />
    </div>
    </div>


  )
}

export default Tricks;

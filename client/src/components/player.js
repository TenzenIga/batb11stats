import React from 'react'


const Player = (props) => {
  const {position, team, name} = props;
  return (
  <li className={`player_${position} team_${team}`} >{name}</li>
  )
}

export default Player;

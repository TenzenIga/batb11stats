import React from 'react'
import { NavLink } from 'react-router-dom';
const RoundsPanel = (props) => {
  return (
    <ul className='roundsPanel'>
        <li ><NavLink to = "/charts" activeStyle={ {color: '#000'}} className="round_link" >All</NavLink></li>
        <li ><NavLink to = "/round1" activeStyle={ {color: '#000'}} className="round_link" >Round 1</NavLink></li>
        <li ><NavLink to = "/round2" activeStyle={ {color: '#000'}} className="round_link" >Round 2</NavLink></li>
    </ul>
  )
}

export default RoundsPanel;

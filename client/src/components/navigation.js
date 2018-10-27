import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
class Navigation extends Component {

toggleMenu = ()=>{
  let navMenu = document.getElementById('my_nav_menu');
  if(navMenu.className === 'nav_menu'){
    navMenu.className += '_responsive';
  }else {
    navMenu.className ='nav_menu';
  }
}
render(){
  return (
     <nav className="nav">
       <div className="nav_menu_icon" onClick={this.toggleMenu}>
         <div></div>
  <div></div>
  <div></div>
       </div>
            <ul id='my_nav_menu' className='nav_menu'>
                <li ><NavLink to = "/" exact activeStyle={ {color: 'rgba(255, 255, 255, 0.8)'}} className="nav_link" >Main</NavLink></li>
                <li ><NavLink to = "/table" activeStyle={ {color: 'rgba(255, 255, 255, 0.8)'}} className="nav_link" >Score</NavLink></li>
                <li ><NavLink to = "/charts" activeStyle={ {color: 'rgba(255, 255, 255, 0.8)'}} className="nav_link" >Charts</NavLink></li>
            </ul>
        </nav>
  )
}
}

export default Navigation;

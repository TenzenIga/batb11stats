import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Score from './components/score';
import './App.css';
import Navigation from './components/navigation';
import Charts from './components/charts';
import Main from './components/main';
class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    data:[]
  }
}
componentDidMount(){
    fetch('http://localhost:5000/api/games')
      .then(res => res.json())
      .then(
        (result) =>{
          this.setState({
            data:result
          })
        }
      )
}

  render() {
    const {data} = this.state;
    let round1 = data.filter(game => game.id < 17);
    let round2 = data.filter(game => game.id > 16);
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path='/' exact
              render={(props)=> <Main />}
              />
            <Route path='/table'
              render={(props) => <Score {...props} score = {data} />}
              />
            <Route path='/charts'
              render={ (props)=> <Charts {...props} data = {data} /> }
             />
           <Route path = '/round1'
              render={ (props)=> <Charts {...props} data= {round1} /> }
             />
           <Route path = '/round2'
              render={ (props)=> <Charts {...props} data= {round2} /> }
             />
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}
Score.propTypes = {
  score: PropTypes.array
}
Charts.propTypes = {
  data:PropTypes.array
}



export default App;

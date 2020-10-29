import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import { homePage } from "./utils/Constants";




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: homePage,
      playerName: '',
      computerScore: '',
      playerScore: '',
      result: ''
    }
  }

  changeActivePage = (page, playerName) => {
    this.setState({
      activePage: page,
      playerName: playerName
    })
  }

  getGameResult = (page, computerScore, playerScore, result) => {
    this.setState({
      activePage: page,
      computerScore: computerScore,
      playerScore: playerScore,
      result: result
    })
  }


  render() {
    return (
      <div className='container my-5'>
        <Main className='col-12 align-self-center' page={this.state.activePage} changePage={this.changeActivePage} playerName={this.state.playerName} getResult={this.getGameResult} results={this.state} />
      </div>
    )
  }
}


export default App;


// return (
//   <Main page={this.state.activePage} changePage={this.changeActivePage}/>
// )
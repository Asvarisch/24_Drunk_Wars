import React, { Component } from 'react'
// import { playerDeck, computerDeck } from "../utils/Constants";
import { resultPage } from "../utils/Constants";
import { getNewDeckOfCard } from "../utils/Constants";

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPageReady: true
        }
    }

    componentDidMount() {
        const deck = getNewDeckOfCard();
        this.setState({
            computerScore: 0,
            playerScore: 0,
            computerDeck: deck.computerDeck,
            playerDeck: deck.playerDeck,
            isPageReady: false
        })
    }

    handleTable = () => {
        if (this.state.computerDeck[0].value > this.state.playerDeck[0].value) {
            this.state.computerDeck.splice(0, 1);
            this.state.playerDeck.splice(0, 1);
            this.setState({
                computerScore: this.state.computerScore + 1,
            })
        }
        else if (this.state.computerDeck[0].value < this.state.playerDeck[0].value) {
            this.state.computerDeck.splice(0, 1);
            this.state.playerDeck.splice(0, 1);
            this.setState({
                playerScore: this.state.playerScore + 1,
            })
        }
        else if (this.state.computerDeck[0].value == this.state.playerDeck[0].value) {
            this.state.computerDeck.splice(0, 1);
            this.state.playerDeck.splice(0, 1);
            this.setState({
                computerScore: this.state.computerScore,
                playerScore: this.state.playerScore
            })
        }
    }

    render() {
        if (this.state.isPageReady) {
            return (
                <div className='spinner-border'></div>
            );
        }
        else if (!this.state.isPageReady && this.state.computerDeck.length > 0 && this.state.playerDeck.length > 0) {
            return (

                <div class="container h-100">
                    <div class="row border border-success">
                        <p className='col-12 mr-auto'>Computer</p>
                        <div className='col-12 mx-auto'>
                            <p className='mx-auto text-center card py-5'>{this.state.computerDeck[0].value} {this.state.computerDeck[0].suit}</p>
                        </div>
                        <div className='col-12 mx-auto'>
                            <p className='mx-auto text-center card py-5'>{this.state.playerDeck[0].value} {this.state.playerDeck[0].suit}</p>
                        </div>
                        <p className='col-1 ml-auto'>{this.props.playerName}</p>
                        <div className='col-12 mx-auto'>
                            <button onClick={this.handleTable} className='col-2 mr-auto mb-2'>Next</button>
                        </div>


                    </div>
                </div>



            )
        }
        else {
            if (this.state.computerScore >= this.state.playerScore) {
                return <div>{this.props.getResult(resultPage, this.state.computerScore, this.state.playerScore, 'You Lose')}</div>
            } else {
                return <div>{this.props.getResult(resultPage, this.state.computerScore, this.state.playerScore, 'You Won')}</div>
            }
        }

    }
}


export default Game;

import React from 'react'
import { gamePage } from "../utils/Constants";

const Result = props => {

    return (
        <div className='jumbotron d-flex align-items-center text-center border border-success'>
            <div class="container">
                <p className='text-danger display-4'>{props.results.result}</p>
                <p className='text-danger'>{props.results.playerScore} - {props.results.computerScore}</p>
                <button onClick={() => props.changePage(gamePage)} className='col-3 text-center btn-primary'>Again?</button>
            </div>
        </div>
    )

}

export default Result;

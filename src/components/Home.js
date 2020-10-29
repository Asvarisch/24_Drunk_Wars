import React from 'react'
import { gamePage } from "../utils/Constants";

const Home = props => {

    const handleSubmitName = event => {
        event.preventDefault();
        const playerName = event.currentTarget.name.value.trim();
        props.changePage(gamePage, playerName);
    }


    return (
        <div class="container h-100">
            <div class="row border border-success text-center">
                <header className='col-12 display-3 text-primary py-4'>Ready for WAR</header>
                <form onSubmit={handleSubmitName} className='col-6 mx-auto'>
                    <input type='text' name='name' placeholder='Enter Your Name' className='col-12' /><br></br>
                    <button type='submit' className='col text-center btn-primary'>Start</button>
                </form>
            </div>
        </div>
    )
}


export default Home;




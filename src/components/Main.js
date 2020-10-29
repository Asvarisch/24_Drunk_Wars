import React from 'react';
import {gamePage, resultPage} from "../utils/Constants";
import Game from "./Game";
import Home from "./Home";
import Result from "./Result";


const Main = props => {
    switch (props.page) {
        case gamePage:
            return <Game changePage={props.changePage} playerName={props.playerName} getResult={props.getResult}/>;
        case resultPage:
            return <Result changePage={props.changePage} results={props.results}/>;
        default:
            return <Home changePage={props.changePage} />;
    }

};

export default Main;
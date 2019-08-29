import React from 'react';
import {useSelector} from 'react-redux';


export const Prediction = () => {
    const player = useSelector(state => state.player.player);  
       
    return(
        <div>
            <div>
                <div>
                <h3>{player.player}</h3>
                </div>
                <div>
                    <h4>Stats</h4>
                    <p>Colege: {player.college}</p>
                    <p>Draft Year: {player.draft_yr}</p>
                    <p>team: {player.team}</p>
                </div>
            </div>
            <div>
                <div>
                <img src='#' atl='#'/> 
                <h4>comparison player name</h4>
                </div>
                <div>
                    card comparison player stats
                </div>
            </div>
        </div>
    )
}
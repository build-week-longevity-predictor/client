import React from 'react';



export const Prediction = (props) => {


    return(
        <div>
            <div>
                <div>
                <h3>{props.player.player}</h3>
                </div>
                <div>
                    <h4>Stats</h4>
                    <p>Colege: {props.player.college}</p>
                    <p>Draft Year: {props.player.draft_yr}</p>
                    <p>team: {props.player.team}</p>
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
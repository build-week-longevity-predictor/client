import React, {useState} from 'react';
import SearchForm from './SearchForm'
import {Prediction} from './Prediction'
import {connect} from 'react-redux'




const Predictor = (props) => {
    
    
    return (
        <div>
          <SearchForm />

          {props.players.map(player => {
            if(player.player === props.name){
              return <Prediction player={player}/>
            }
          })}
         

        </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {
        name: state.player.name,
        players: state.player.allPlayers,
    }
}

export default connect(mapStateToProps, {})(Predictor);
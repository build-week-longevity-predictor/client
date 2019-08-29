import React from "react";
import { AutoComplete, Divider } from "antd";
import { searchPlayer } from "../../action/index";
import {useSelector, useDispatch} from 'react-redux';
import { Prediction } from "./Prediction";

const SearchForm = () => {
    const allPlayersNames = useSelector(state => state.player.allPlayersNames);
    const playerLoaded = useSelector(state => state.player.playerLoaded);  
             
    const dispatch = useDispatch();    

    return (
        <>
        <AutoComplete
            style={{ width: 200 }}
            dataSource={allPlayersNames}
            placeholder="Clyde Drexler"
            filterOption={(inputValue, option) =>
                option.props.children
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
            }
            onSelect={
                (value, option) => dispatch(searchPlayer(value))
                
            }            
        />
          {playerLoaded && 
                <>
                  <Divider />
                  <Prediction />
                </>
            }
                 
        </>
    );    
};

export default SearchForm



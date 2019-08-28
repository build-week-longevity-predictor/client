import React, {useState} from 'react';
import { connect } from 'react-redux';
import {searchPlayer} from'../../action/index';





const SearchForm = (props) => {
    const [player, setPlayer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchPlayer(player)
    }

    const handleChange = (e) => {
        setPlayer(e.target.value)
    }
    console.log(player)
    return (
        <div>
            <h2>Title and Logo</h2>
        <form onSubmit={handleSubmit} >
            <label>
                Search Player
                <input
                    type='text'
                    name='player'
                    placeholder='Search Player'
                    value={player.name}
                    onChange={handleChange}
                />
            </label>
            <button>Search</button>
        </form>
        <button>
            Random
        </button>
        </div>
    )
}

export default connect(null, {searchPlayer})(SearchForm)
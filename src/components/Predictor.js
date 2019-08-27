import React, {useState} from 'react';





const Predictor = () => {
    const [player, setPlayer] = useState({name: ''})

    const handleChange = () => {
        setPlayer({...player, [e.target.name]: e.target.value})
    }
    console.log(player)
    return (
        <>
        <form>
            <label>
                Search Player
                <input
                    type='text'
                    name='name'
                    placeholder='Search Player'
                    value={player.name}
                    OnChange={handleChange}
                />
            </label>
        </form>
        </>
    )
}


// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         name: state.name
//     }
// }

export default Predictor;
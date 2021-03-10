import React from 'react';

class MyPokemon extends React.Component{

    render(){
        return(
            <div>
                <h1>My Favorite Pokemon</h1>
        <p>{this.props.name}</p>
            </div>
        )
    }
}

export default MyPokemon;
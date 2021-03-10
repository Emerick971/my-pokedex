import React, { useState } from 'react';
import '../css/pokedexStyle.css';


const PokeCard = () => {

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState([]);
   

    function searchPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName)
        .then((resp) => resp.json())
        .then((data) => getPokemon(data))
        setPokemonChosen(true);
        };

        

        function getPokemon(pokemon) {
            setPokemon(pokemon);
            console.log(pokemon.stats[0].base_stat);
        }

    function modifInput (e) {
       setPokemonName(e.target.value);
    }


    return(
        <div className="definition">
            <div className="titleSection">
                            <h1>Pokemon Stats</h1>
                <div>
                <input 
                type="text" 
                onChange={(e)=> modifInput(e)}
                value={pokemonName}
                />
                </div>
                <button onClick={()=> searchPokemon()} >Search Pokemon</button>
                </div>
                <div className="container">

                    

                    <div className="def">
                {
                !pokemonChosen ? (<h3 className="pokemonChoosen">Please choose a pokemon</h3>) : 
                <div className="cardContainer">
                <h2>{pokemon.name}</h2>
                {
                    pokemon.sprites != null &&
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} /> 
                }
                <div className="information">
                    {
                        pokemon.types != null &&
                        <p className="type">{pokemon.types[0].type.name}<br></br> Type</p>
                    }
                    {
                        pokemon.weight != null &&
                        <p className="type">{pokemon.weight}<br></br>Weight</p>
                    }
                    {
                        pokemon.height != null &&
                        <p className="type">{pokemon.height}<br></br>Pied</p>
                    }
                    
                </div>
                <div className="information">
                    {
                        pokemon.stats != null &&
                        <p className="type">{pokemon.stats[0].base_stat}<br></br> Hp</p>
                    }
                    {
                        pokemon.stats != null &&
                        <p className="type">{pokemon.stats[1].base_stat}<br></br>Attack</p>
                    }
                    {
                        pokemon.stats != null &&
                        <p className="type">{pokemon.stats[2].base_stat}<br></br>Defense</p>
                    }

                </div>

                </div>
                }
                </div>
                </div>

        </div>
    )

}
 
export default PokeCard;
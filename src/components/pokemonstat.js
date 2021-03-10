import React from 'react';


class PokemonStat extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pokemonName: "",
            pokemon: [],
        } 
    }

       // Récupérer les données de l'API avec fetch
componentDidMount() {
    this.searchPokemon();
 }

 searchPokemon = () => {
fetch('https://pokeapi.co/api/v2/pokemon/'+this.state.pokemonName)
.then((resp) => resp.json())
.then((data) => this.getPokemon(data))
}

    // Initialisation de la fonction "modifInput" appelée dans le onChange de l'input
    // Le onChange envoit un paramètre (objet) que je récupère
    modifInput = (e) => {
        this.setState({pokemonName:e.target.value})
        console.log(this.state.pokemonName)
    
    }

   getPokemon = (data) => {
    this.setState({pokemon:data}, ()=> {console.log (this.state.pokemon.sprites)} );
   }

    render() {
        return (
            <div>
                <h1>Pokemon Stats</h1>
                <input 
                type="text" 
                onChange={this.modifInput}
                value={this.state.pokemonName}
                />
                <button onClick={this.searchPokemon} >Search Pokemon</button>
                <div>
                {
                this.state.pokemon != null &&
                <div>
                <h1>{this.state.pokemon.name}</h1>
                <p>{this.state.pokemon.order}</p>
 
                {
                    this.state.pokemon.sprites != null &&
                    <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} /> 
                }
                
                <p>{this.state.pokemon.weight}</p>
                </div>
                }
                </div>
            </div>
        )
    }
}

export default PokemonStat;
import React, {Component} from "react";

import "./Pokecard.css"
class Pokecard extends Component{
    constructor(){
        super()
    }
    render(){
        return (<div className="Pokecard">
            <h1 className="Pokecard-h1" >{this.props.name}</h1>
            <img className="Pokecard-img" src = {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id}.png`}></img>
            <h3>Type : {this.props.type}</h3>
            <h4>EXP : {this.props.exp}</h4>
        </div>)
    }
}

export default Pokecard
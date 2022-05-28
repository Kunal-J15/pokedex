import React, {Component} from "react";
import Pokedex from "./Pokedex"
import pokemons from "./Pokemons";

class Pokegame extends Component{
    constructor(){
        super()
    }

    render(){
        let a = pokemons
        let hand1=[],score1=0
        for(let i=0;i<4;i++){
            hand1.push(a[Math.floor(Math.random()*a.length)])
            score1+=hand1[hand1.length-1].base_experience
            a=a.filter(p=>{return hand1.indexOf(p)==-1})
        }
        let hand2=[],score2=0
        for(let i=0;i<4;i++){
            hand2.push(a[Math.floor(Math.random()*a.length)])
            score2+=hand2[hand2.length-1].base_experience
            a=a.filter(p=>{return hand2.indexOf(p)==-1})
        }
        return (<div>
                <Pokedex hand={hand1} player="ash" isWin={score1>score2?true:false}></Pokedex>
                <Pokedex hand={hand2} player="joe" isWin={score2>score1?true:false}></Pokedex>
        </div>)
    }
}
export default Pokegame
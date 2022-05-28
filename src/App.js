import React, {Component} from "react";
import Pokedex from "./Pokedex"
import Pokegame from "./Pokegame"
import "./App.css"
class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <Pokegame></Pokegame>
            </div>
            )
    }
}

export default App
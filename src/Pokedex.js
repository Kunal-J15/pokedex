import React, {Component} from "react";
import Pokecard from "./Pokecard";
import "./pokedex.css"
class Pokedex extends Component{
    constructor(props){
        super(props)
    }
    render(){
        

        return (
            <div >
                
                <h1 >{this.props.player}</h1>
                <h2 className={this.props.isWin?"win":"lose"}>{this.props.isWin?"winner":"losser"}</h2>
                {this.props.hand.map(p=>{return<Pokecard name={p.name} 
                id={`${p.id}`.length==3?p.id:(`${p.id}`.length==1?`00${p.id}`:`0${p.id}`)} 
                type={p.type} 
                exp ={p.base_experience}>
                </Pokecard>})}
            </div>
        )
    }
}
export default Pokedex
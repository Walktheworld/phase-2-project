import React, { Component } from "react";
import BrewList from "../components/BrewList";

class ToBrewCon extends Component{

    render(){
        
        return <div className="toBrew">
            {this.props.beer.map(beer=>
                <BrewList beer= {beer} key={beer.id} />)}
            </div>
    }
}

export default ToBrewCon;
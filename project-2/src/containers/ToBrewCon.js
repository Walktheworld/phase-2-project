import React, { Component } from "react";
import BrewList from "../components/BrewList";

class ToBrewCon extends Component{

    // handleClick=()=>{
    //     this.props.removeFav(this.props.beer)

    //     fetch('http://localhost:3000/beer', {
    //         method: 'DELETE',
    //         body: JSON.stringify(this.props.beer)
    //     })
    // }



    render(){
        
        return <div className="toBrew">
            {this.props.beer.map(beer=>
                <BrewList beer= {beer} key={beer.id} removeFav= {this.props.removeFav} />)}
            </div>
    }
}

export default ToBrewCon;
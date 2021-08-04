import React, { Component } from "react";
import MyList from "../components/MyList";


class ToBrewCon extends Component{

    render(){
        return <div className="toBrew">
            {this.props.beer.map(beer=>
                <MyList beer= {beer} key={beer.id}/>)}
            </div>
    }
}

export default ToBrewCon;
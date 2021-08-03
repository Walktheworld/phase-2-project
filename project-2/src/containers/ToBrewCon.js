import React, { Component } from "react";
import MyList from "../components/MyList";


class ToBrewCon extends Component{
    constructor(){
        super()
        this.state= {
          beer:[]
        }
      }
    
      componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers?page=2&per_page=50')
          .then(res => res.json())
          .then(data=>{
            this.setState({
              beer: data
            })
       })
      }
    
    render(){
        return <div className="toBrew">
            {this.state.beer.map(beer=>
                <MyList beer= {beer} key={beer.id}/>)}
            </div>
    }
}

export default ToBrewCon;
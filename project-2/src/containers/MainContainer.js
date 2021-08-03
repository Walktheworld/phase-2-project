import React, { Component } from "react";
import Content from "../components/Content";
import Header from "../components/Header";



class MainContainer extends Component {
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

  
    handleInfoClick=()=>{
      console.log("button clicked")
    }

  
    render() {
      return (
        <div>
          <Header/>
          {this.state.beer.map(beer=>
            <Content handleInfoClick= {this.handleInfoClick} beer= {beer} key={beer.id}/>)};
        </div>
        )
      }
  
  }
  export default MainContainer;
import React, { Component } from "react";
import Content from "../components/Content";






class MainContainer extends Component {

    handleInfoClick=()=>{
      console.log("add like button")

    }

  
    render() {

      return (
        <div>
          {this.props.beer.map(beer=>
            <Content handleInfoClick= {this.handleInfoClick} beer= {beer} key={beer.id}/>)};
        </div>
        )
      }
  
  }
  export default MainContainer;
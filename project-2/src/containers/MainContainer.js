import React, { Component } from "react";
import Content from "../components/Content";






class MainContainer extends Component {
  


  
    render() {

      return (
        <div>
          {this.props.beer.map(beer=>
            <Content handleInfoClick= {this.props.handleInfoClick} beerFavBtn={this.props.beerFavBtn} beer= {beer} key={beer.id}/>)};
        </div>
        )
      }
  
  }
  export default MainContainer;
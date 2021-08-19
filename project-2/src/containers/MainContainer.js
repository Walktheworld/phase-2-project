import React, { Component } from "react";
import Content from "../components/Content";

class MainContainer extends Component {
  
    render() {

      return (
        <div>
          {this.props.beer.map(beer=>
            <Content  nextBrew= {this.props.nextBrew} addToFav={this.props.addToFav} beer= {beer} key={beer.id}/>)};
        </div>
        )
      }
  
  }
  export default MainContainer;
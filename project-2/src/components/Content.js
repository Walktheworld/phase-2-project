import React, { Component } from "react";

class Content extends Component{



    render(){
        return (
            <div className="beer">
                <div className="image">
                    <div>
                        <img alt="oh no!" src={this.props.beer.image_url}  />
                    </div>
                    <div className="buttons">
                        <button onClick={this.props.handleInfoClick}>More Info</button>
                        <button onClick={this.props.handleClick}>Add to Favorite</button>
                    </div>
                </div>
                
                <div className="info">
                    <h3>{this.props.beer.name}</h3>
                    <p>{this.props.beer.tagline}</p>
                    <p>{this.props.beer.description}</p>
                </div>  
                <div>             
                    <p><strong>ABV:</strong> {this.props.beer.abv}%</p>
                    <p><strong>IBU:</strong> {this.props.beer.ibu}</p>
                    <p><strong>Attenuation Level:</strong> {this.props.beer.attenuation_level}</p>
                    <p><strong>Ph Level:</strong> {this.props.beer.ph}</p>
                    <div><strong>Food Pairng:</strong>
                        <ul>
                            {this.props.beer.food_pairing.map((arr, index)=>
                                <li key={index}>{arr}</li>)}
                        </ul>

                    </div>
                </div>
            </div>
          );
    }
}

export default Content;
import React, { Component } from "react";


class MyList extends Component{

    render(){ 
        
        
        return (
            <div className="myList"
            text-align= "left"
            display= "grid"
            grid-template-columns= "15rem 35rem 30rem"
            grid-gap="1rem"
            border-style="groove" >
                <div className="image">
                    <div>
                        <img alt="BEER!" src={this.props.beer.image_url}  />
                    </div>
                    <div className="buttons">
                        <button >push me</button>
                    </div>
                </div>
                
                <div className="info">
                    <h3>{this.props.beer.name}</h3>
                    <p>{this.props.beer.tagline}</p>
                    <p>{this.props.beer.brewers_tips}</p>
                    <p>Boil Volume: {this.props.beer.volume.value}{this.props.beer.volume.unit}</p>
                    <p>Mash Temperature: {this.props.beer.method.mash_temp[0].temp.value} {this.props.beer.method.mash_temp[0].temp.unit}</p>
                </div>  
                <div>             
                    <p><strong>ABV:</strong> {this.props.beer.abv}%</p>
                    <p><strong>IBU:</strong> {this.props.beer.ibu}</p>
                    <p><strong>Attenuation Level:</strong> {this.props.beer.attenuation_level}</p>
                    <p><strong>Ph Level:</strong> {this.props.beer.ph}</p>
                    <p><strong>Food Pairng:</strong>
                        <li>
                            {this.props.beer.food_pairing[0]}
                        </li>
                        <li>
                            {this.props.beer.food_pairing[1]}
                        </li>
                        <li>
                            {this.props.beer.food_pairing[2]}
                        </li>

                    </p>
                </div>
            </div>
        );
    } 
}

export default MyList;
import React, { Component } from "react";


class MyList extends Component{

    render(){ 
        
        
        return (
            <div className="myBeerList">
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
                    <div className="ingList">
                        <div><strong>Hops:</strong><small>(1=start 2=middle 3+=end)</small>
                            <ol className="hops">
                            {this.props.beer.ingredients.hops.map((arr, index)=>
                                <li key={index}>{arr.amount.value} {arr.amount.unit} of {arr.name}</li>
                            )}
                            </ol> 
                            <p><strong>Yeast:</strong> {this.props.beer.ingredients.yeast}</p>
                        </div>   
                        <div><strong>Malts:</strong>
                            <ol className="malts">
                            {this.props.beer.ingredients.malt.map((arr, index)=>
                                <li key={index}>{arr.amount.value} {arr.amount.unit} of {arr.name}</li>
                            )}
                        </ol>
                        </div>
                    </div>                     

                </div>  
                <div>             
                    <p><strong>ABV:</strong> {this.props.beer.abv}%</p>
                    <p><strong>IBU:</strong> {this.props.beer.ibu}</p>
                    <p><strong>Attenuation Level:</strong> {this.props.beer.attenuation_level}</p>
                    <p><strong>Ph Level:</strong> {this.props.beer.ph}</p>
                    <p><strong>Boil Volume:</strong> {this.props.beer.volume.value} {this.props.beer.volume.unit}</p>
                    <p><strong>Mash Temperature:</strong> {this.props.beer.method.mash_temp[0].temp.value} {this.props.beer.method.mash_temp[0].temp.unit}</p>
                    <p><strong>Fermentation Temperature:</strong> {this.props.beer.method.fermentation.temp.value} {this.props.beer.method.fermentation.temp.unit}</p>

                </div>
            </div>
        );
    } 
}

export default MyList;
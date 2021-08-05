import React from "react";


const BrewList = props =>{

        return (
            <div className="myBeerList">
                <div className="image">
                    <div>
                        <img alt="BEER!" src={props.beer.image_url}  />
                    </div>
                    <div className="buttons">
                        <button >push me</button>
                    </div>
                </div>
                
                <div className="info">
                    <h3>{props.beer.name}</h3>
                    <p>{props.beer.tagline}</p>
                    <p>{props.beer.brewers_tips}</p>
                    <div className="ingList">
                        <div><strong>Hops:</strong>
                            <ol className="hops">
                            {props.beer.ingredients.hops.map((arr, index)=>
                                <li key={index}>{arr.amount.value} {arr.amount.unit} of {arr.name} ({arr.add})</li>
                            )}
                            </ol> 
                            <p><strong>Yeast:</strong> {props.beer.ingredients.yeast}</p>
                        </div>   
                        <div><strong>Malts:</strong>
                            <ol className="malts">
                            {props.beer.ingredients.malt.map((arr, index)=>
                                <li key={index}>{arr.amount.value} {arr.amount.unit} of {arr.name}</li>
                            )}
                        </ol>
                        </div>
                    </div>                     

                </div>  
                <div>             
                    <p><strong>ABV:</strong> {props.beer.abv}%</p>
                    <p><strong>IBU:</strong> {props.beer.ibu}</p>
                    <p><strong>Attenuation Level:</strong> {props.beer.attenuation_level}</p>
                    <p><strong>Ph Level:</strong> {props.beer.ph}</p>
                    <p><strong>Boil Volume:</strong> {props.beer.volume.value} {props.beer.volume.unit}</p>
                    <p><strong>Mash Temperature:</strong> {props.beer.method.mash_temp[0].temp.value} {props.beer.method.mash_temp[0].temp.unit}</p>
                    <p><strong>Fermentation Temperature:</strong> {props.beer.method.fermentation.temp.value} {props.beer.method.fermentation.temp.unit}</p>
                    <p><strong>SRM:</strong> {props.beer.srm}</p>
                    <p><strong>Initial Gravity:</strong> {props.beer.target_og}</p>
                    <p><strong>Final Gravity:</strong> {props.beer.target_fg}</p>

                    {/* <p><small>SRM scale (1=light 60=dark 200=black)</small></p> */}

                </div>
            </div>
        );
}

export default BrewList;
import React from "react";
import LikeBtn from "./LikeBtn";
import { useHistory } from "react-router-dom";

const Content= props=>{
    const history = useHistory()

    const handleclick= ()=>{
        props.nextBrew(props.beer)
        history.push('/viewBrew')
    }

        return (
            <div className="beer">
                <div className="image">
                    <div>
                        <img alt="oh no!" src={props.beer.image_url}  />
                    </div>
                    <div className="buttons">
                        <LikeBtn addToFav = {props.addToFav} beer={props.beer}/>
                        <button onClick={handleclick}>View Brew</button>
                    </div>
                </div>
                
                <div className="info">
                    <h3>{props.beer.name}</h3>
                    <p>{props.beer.tagline}</p>
                    <p>{props.beer.description}</p>
                </div>  
                <div>             
                    <p><strong>ABV:</strong> {props.beer.abv}%</p>
                    <p><strong>IBU:</strong> {props.beer.ibu}</p>
                    <p><strong>Attenuation Level:</strong> {props.beer.attenuation_level}</p>
                    <p><strong>Ph Level:</strong> {props.beer.ph}</p>
                    <div><strong>Food Pairng:</strong>
                        <ul>
                            {props.beer.food_pairing.map((arr, index)=>
                                <li key={index}>{arr}</li>)}
                        </ul>

                    </div>
                </div>
            </div>
          );
}

export default Content;
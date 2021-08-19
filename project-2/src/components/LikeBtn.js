import React, { Component } from "react";

class LikeBtn extends Component{
    state={
        liked: false
    }
    handleInfoClick=()=>{
        this.props.addToFav(this.props.beer)
        this.setState({
            liked: !this.state.liked
        })

        fetch('http://localhost:3000/beer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.props.beer)
        })
    }
  
    render(){
        const onLike= this.state.liked ? "red" : "grey"
         return (
            <button id="heart" onClick={this.handleInfoClick} style= {{color: onLike}}>♥</button>
        );
    }
};

export default LikeBtn;
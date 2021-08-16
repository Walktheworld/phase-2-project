import React, { Component } from "react";

class LikeBtn extends Component{
    state={
        liked: false
    }
    
    handleInfoClick=(e)=>{
        this.setState({
            liked: !this.state.liked
        })
        e.preventDefault()
      }
  
    render(){
        const onLike= this.state.liked ? "red" : "grey"
         return (
            <button id="heart" onClick={this.handleInfoClick} style= {{color: onLike}}>♥</button>
        );
    }
};

export default LikeBtn;
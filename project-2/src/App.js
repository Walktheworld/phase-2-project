import React, { Component } from "react";
import './App.css';
import MainContainer from "./containers/MainContainer";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ToBrewCon from "./containers/ToBrewCon";
import Header from "./components/Header";
import NextBrew from "./components/NextBrew";



class App extends Component{

  constructor(){
    super()
    this.state= JSON.parse(window.localStorage.getItem('state')) ||
      {
      beer:[],
      beerFavs: [],}
  }


  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers?page=3&per_page=20')
      .then(res => res.json())
      .then(data=>{
        this.setState({
          beer: data,
        })
   })
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  beerFavBtn = (beerId) => {
    if(beerId){
  
      this.setState({ beerFavs: beerId });
    }
    else(console.log("no beer found"))
    
 
  }

  render(){
    return (
      <Router>
        <Header/>
       <>
         <NavBar />
          <Route exact path="/"  render= {(props)=> <MainContainer beer={this.state.beer}  beerFavBtn={this.beerFavBtn}/>} />
          <Route exact path="/brewList"  render= {(props)=> <ToBrewCon beer={this.state.beer}/>}/>
          <Route exact path="/next-to-brew" render= {(props)=> <NextBrew beer={this.state.beerFavs}/>}/>
        </>
      </Router>
   );
  }
};

export default App


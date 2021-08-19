import React, { Component } from "react";
import './App.css';
import MainContainer from "./containers/MainContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ToBrewCon from "./containers/ToBrewCon";
import Header from "./components/Header";
import ViewBrew from "./components/ViewBrew";

class App extends Component{

  constructor(){
    super()
    this.state= 
      {
      beer:[],
      favBeers: [],
      viewBrew: null,}
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers?page=3&per_page=20')
      .then(res => res.json())
      .then(data=>{
        this.setState({
          beer: data,
        })
    })

    fetch('http://localhost:3000/beer')
      .then(res => res.json())
      .then(data=>{
      this.setState({
        favBeers: data,
      })
    })

  }

  nextBrew = (beer) => {
    if(beer){
      this.setState({ viewBrew: beer});
    }
    else(console.log("no beer found"))
  }
  
  addToFav= (beer)=>{
    this.setState({
      favBeers: [ ...this.state.favBeers, beer]
    })
  }

  removeFav = (beer)=>{
    const removeBeer = this.state.favBeers.filter( favBeers => favBeers.id !== beer.id)
    this.setState({favBeers:removeBeer})

  }

  render(){
    return (
      <Router>
        <Header/>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/"  render= {()=> <MainContainer beer={this.state.beer} nextBrew={this.nextBrew} addToFav = {this.addToFav}/>} />
            <Route exact path="/viewBrew" render= {()=> <ViewBrew beer={this.state.viewBrew} addToFav = {this.addToFav}/>}/>
            <Route exact path="/brewList"  render= {()=> <ToBrewCon beer={this.state.favBeers} removeFav= {this.removeFav}/>}/>
          </Switch>
        </>
      </Router>
   );
  }
};

export default App


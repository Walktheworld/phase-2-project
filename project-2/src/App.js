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



class App extends Component{

  constructor(){
    super()
    this.state= {
      beer:[],
      beerFavs: [],
    }
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers?page=3&per_page=25')
      .then(res => res.json())
      .then(data=>{
        this.setState({
          beer: data
        })
   })
  }

  handleInfoClick=()=>{
    console.log("add like button")

  }

  beerFavBtn = (id) => {
    if (!this.state.beer.find(bid => bid === id)){
      this.setState({
        beerFavs: [...this.state.beerFavs, id]
      })
    }
  }

  render(){
    return (
      <Router>
        <Header/>
       <div>
         <NavBar />
          <Route exact path="/"  render= {(props)=> <MainContainer beer={this.state.beer} handleInfoClick={this.handleInfoClick} beerFavBtn={this.beerFavBtn}/>} />
          <Route exact path="/myList"  render= {(props)=> <ToBrewCon beer={this.state.beer}/>}/>
          <Route exact path="/been-there-brewed-that"/>
        </div>
      </Router>
   );
  }
};

export default App

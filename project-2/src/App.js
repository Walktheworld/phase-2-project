import React from "react";
import './App.css';
import MainContainer from "./containers/MainContainer";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ToBrewCon from "./containers/ToBrewCon";
import Header from "./components/Header";



const App =()=>{

  // constructor(){
  //   super()
  //   this.state= {
  //     beer:[]
  //   }
  // }

  // componentDidMount(){
  //   fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
  //     .then(res => res.json())
  //     .then(data=>{
  //       this.setState({
  //         beer: data
  //       })
  //  })
  // }

    return (
      <Router>
        <Header/>
       <div>
         <NavBar />
          <Route exact path="/"  component={MainContainer} />
          <Route exact path="/myList"  component={ToBrewCon} />
          <Route exact path="/been-there-brewed-that"/>
        </div>
      </Router>
   );
};

export default App

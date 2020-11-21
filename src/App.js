import logo from './logo.svg';
import Movies from "./components/movies";
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-Found';
class App extends Component{
  state={}
  render()
  {
    return(
      <main className="Container">
        <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" ></Redirect>
        <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  
  }
  
} 
export default App;
import logo from './logo.svg';
import Movies from "./components/movies";
import './App.css';
import {React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-Found';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
class App extends Component{
  state={}
  render()
  {
    return(
      <div>
      <NavBar/>
      <main className="Container">
        <Switch>
        <Route path="/movies/:id" component={MovieForm}/>
        <Route path="/movies"  component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />   
        <Redirect to="/not-found" />
        </Switch>
      </main>  
      </div>
    );
  
  }
  
} 
export default App;
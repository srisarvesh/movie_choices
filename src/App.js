import logo from './logo.svg';
import Movies from "./components/movies";
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component{
  state={}
  render()
  {
    return(
      <main className="Container">
        <Movies/>
      </main>
    );
  
  }
  
}
export default App;
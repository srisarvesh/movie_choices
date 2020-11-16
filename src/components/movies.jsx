import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import {Like} from './common/like'
class Movies extends Component{

    state={
        movies:getMovies()
    };
    handledelete=movie=>{
        const movies=this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies});

    };
    
    render()
    {
        if(this.state.movies.length==0)
        {
            return(
                <p>NOTHING TO DISPLAY</p>
            )
        }
        
        return(
            <React.Fragment>
            <p>No of movies : {this.state.movies.length}</p>
            <table className="table">
                <thead>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    {this.state.movies.map(movie=>(
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like />
                            </td>
                            <td>
                                <button onClick={()=>this.handledelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                          ))}
                </tbody>
                
            </table>
            </React.Fragment>
        )
    }
    
}
export default Movies;
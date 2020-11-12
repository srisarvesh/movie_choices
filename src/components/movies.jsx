import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

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
        return(
            <table className="table">
                <thead>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
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
                                <button onClick={()=>this.handledelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                          ))}
                </tbody>
                
            </table>
        )
    }
    
}
export default Movies;
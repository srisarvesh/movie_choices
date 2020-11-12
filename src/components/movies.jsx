import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component{

    state={
        movies:getMovies()
    }
    render()
    {
        return(
            <table className="table">
                <thead>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </thead>
                <tbody>
                    {this.state.movies.map(movies=>(
                        <tr>
                            <td>{movies.title}</td>
                            <td>{movies.genre.name}</td>
                            <td>{movies.numberInStock}</td>
                            <td>{movies.dailyRentalRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    
}
export default Movies;
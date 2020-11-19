
import React, { Component } from 'react';
import {Like} from './common/like'
class MoviesTable extends Component
{
    raisesort=(path)=>{
         const sortColumn={...this.props.sortColumn}
        if(sortColumn.path===path)
        {
            sortColumn.order=sortColumn.order==="asc"?"desc":"asc";
        }
        else
        {
            sortColumn.path=path;
            sortColumn.order="asc";
        }
      this.props.onSort(sortColumn);
    }
    render()
    {
    const {movies,onDelete,onLike,onSort}=this.props;
    return (
          <table className="table">
                 <thead>
                    <th onClick={()=>this.raisesort('title')}>Title</th>
                    <th onClick={()=>this.raisesort('genre.name')}>Genre</th>
                    <th onClick={()=>this.raisesort('numberInStock')}>Stock</th>
                    <th onClick={()=>this.raisesort ('dailyRentalRate')}>Rate</th>
                    <th></th>
                    <th></th>   
                </thead>
                <tbody>
                    {movies.map(movie=>(
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like liked={movie.liked} onClick={()=>onLike(movie)}/>
                            </td>
                            <td>
                                <button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                          ))}
                </tbody>
                
            </table>
     );
                    }
};

export default MoviesTable;
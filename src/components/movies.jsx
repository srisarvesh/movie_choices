import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import {Like} from './common/like';
import Pagination from './common/pagination';
import { pagination } from '../utils/paginate';
import PropTypes from 'prop-types';
import ListGroup from './common/listGroup';
import {getGenres} from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
class Movies extends Component{

    state={
        movies:[],
        genres:[],
        pageSize:4,
        currentPage:1
    };
    handledelete=movie=>{
        const movies=this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies});

    };
    componentDidMount(){
        const genres=[{_id:" ",name:"All genres"},...getGenres()]
        this.setState({movies:getMovies(),genres});
    } 
    handleLike=(movie)=>{
        const movies=[...this.state.movies];
        const index=movies.indexOf(movie);
        movies[index]={...movies[index]} ;  
        movies[index].liked=!movies[index].liked;
        this.setState({movies});
    };
    handlePageChange=(page)=>{
        this.setState({currentPage:page}); 
    }
    handleGenreSelect=(genre)=>{
        this.setState({selectedGenre:genre,currentPage:1})
    } 
    handleSort=(path)=>{
        console.log(path)
    }
    
    render()
    {
        const{pageSize,currentPage,selectedGenre,movies:allMovies}=this.state;
        if(this.state.movies.length===0)
        {
            return(
                <p>NOTHING TO DISPLAY</p>
            )

        }

        const filtered=selectedGenre && selectedGenre._id ?allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies;

        const movies=pagination(filtered,currentPage,pageSize);
        return(
            <React.Fragment>
              <div className="row">
                 <div className="col-3">
                     <ListGroup 
                     items={this.state.genres} 
                     onItemSelect={this.handleGenreSelect}
                     selectedItem={this.state.selectedGenre}
                     />
                      
                 </div>
                 <div className="col">
                   <p>No of movies : {filtered.length}</p>
                   <MoviesTable
                   movies={movies}
                   onDelete={this.handledelete}
                   onLike={this.handleLike}
                   onSort={this.handleSort}
                   />
            <Pagination 
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            />
            </div>
            </div>
            </React.Fragment>
        )
    }
      
}
export default Movies;
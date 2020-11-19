import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import {Like} from './common/like';
import Pagination from './common/pagination';
import { pagination } from '../utils/paginate';
import PropTypes from 'prop-types'; 
import ListGroup from './common/listGroup';
import {getGenres} from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component{

    state={
        movies:[],
        genres:[],
        pageSize:4,
        currentPage:1,
        sortColumn:{path:'title',order:'asc'}
    };
    handledelete=movie=>{
        const movies=this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies});

    };
    componentDidMount(){
        const genres=[{_id:"",name:"All genres"},...getGenres()]
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
    handleSort=(sortColumn)=>{
       
        this.setState({sortColumn}) ; 
    }
    
    render()
    {
        const{pageSize,currentPage,selectedGenre,movies:allMovies,sortColumn}=this.state;
        if(this.state.movies.length===0)
        {
            return(
                <p>NOTHING TO DISPLAY</p>
            )

        }

        const filtered=selectedGenre && selectedGenre._id ?allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies;
        
        const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const movies=pagination(sorted,currentPage,pageSize);
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
                   sortColumn={sortColumn}
                   />
            <Pagination 
            itemsCount={filtered.length}
            pageSize={pageSize}
            sortColumn={sortColumn}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            onSort={this.handleSort}
            />
            </div>
            </div>
            </React.Fragment>
        )
    }
      
}
export default Movies;
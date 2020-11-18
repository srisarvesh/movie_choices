import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import propTypes from 'prop-types'
const Pagination = (props) => {

    const{ itemsCount,pageSize,onPageChange,currentPage}=props;
    const pagesCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pagesCount+1);
    if(pagesCount===1){ 
        return null;
    }   
    
    return (
        <nav>
        <ul className="pagination">
              {pages.map(page=>(
              
              <li key={page} className={page===currentPage?"page-item active":"page-item"} >
                  <a  className="page-link" href="#"  onClick={()=>onPageChange(page)}>
                  {page}
                  </a>
                  
               </li>
              ))} 
        </ul>
        </nav>  
    );
};
Pagination.propTypes={
 itemsCount:propTypes.number.isRequired,
 pageSize:propTypes.number.isRequired,
 currentPage:propTypes.number.isRequired,
 onPageChange:propTypes.func.isRequired
};
 
export default Pagination;
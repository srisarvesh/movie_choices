import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

const Pagination = (props) => {

    const{ itemsCount,pageSize }=props;
    const pagesCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pagesCount+1);
    if(pagesCount===1){
        return null;
    }
    
    return (
        <ul className="pagination">
              {pages.map(page=>
              
              <li key={page }className="page-item"><a class="page-link" href="#">{page}</a></li>
              )}
        </ul>
    );
}
 
export default Pagination;
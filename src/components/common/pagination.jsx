import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Pagination = (props) => {

    const{ itemsCount,pageSize }=props;
    return (
        <ul className="pagination">
            
                <li class="page-item"><a class="page-link" href="#">1</a></li>
             
             
        </ul>
    );
}
 
export default Pagination;
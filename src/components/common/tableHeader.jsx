import React, { Component } from 'react';

export default class TableHeader extends Component{

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
    renderSortIcon=column=>{
        const{sortColumn}=this.props; 
        if(column.path!==this.props.sortColumn.path) return null;
        if(this.props.sortColumn.order==='asc')
        {
            return <i className="fa fa-sort-asc" aria-hidden="true"></i>
        }

        return <i className="fa fa-sort-desc"></i>
    };

    render(){
        return(
            <thead>
                <tr>
                    {this.props.columns.map(column=>(
                             <th className="clickable" key={column.path || column.key} onClick={()=>this.raisesort(column.path)}>{column.label}{this.renderSortIcon(column)}</th>
                    ))}
                </tr>
            </thead>
        )
    }
}
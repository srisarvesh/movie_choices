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

    render(){
        return(
            <thead>
                <tr>
                    {this.props.columns.map(column=>(
                             <th key={column.path || column.key} onClick={()=>this.raisesort(column.path)}>{column.label}</th>
                    ))}
                </tr>
            </thead>
        )
    }
}
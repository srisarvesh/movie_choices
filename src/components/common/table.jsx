import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
const Table=(props)=>{

     const {columns,data,onSort,sortColumn}=props;
    return (
         <table className="table">
                 <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
                  <TableBody  data={data} columns={columns}/>
                
                
            </table>
    )
}
export default Table;   
import React, { Component } from 'react';

const ListGroup =(props)=>{
    const{ items, textProperty,valueProperty,onItemSelect }=props;
    return (
     <ul class="list-group">
        {
        items.map(item=><li key={item[valueProperty]} onClick={()=>onItemSelect(item)} class="list-group-item">{item[textProperty]}</li>)
             
        }
       
        
        </ul>
    );
};
ListGroup.defaultProps={
    textProperty:"name",
    valueProperty:"_id"
}

export default ListGroup;
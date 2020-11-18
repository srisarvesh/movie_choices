import React, { Component } from 'react';

const ListGroup =(props)=>{
    const{ items, textProperty,valueProperty }=props;
    return (
     <ul class="list-group">
        {
        items.map(item=><li key={item._id} onClick={()=>props.onItemSelect(item)} class="list-group-item">{item.name}</li>)
             
        }
       
        
        </ul>
    );
};

export default ListGroup;
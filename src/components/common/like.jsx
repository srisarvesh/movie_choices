import React, { Component } from 'react';
export class Like extends Component{
    render() {
        let classes="fa fa-heart";
        if(!this.props.liked)
        {
            classes+="-o";
        }
        return <i className={classes} onClick={this.props.onClick} style={{cursor:'pointer'}}  aria-hidden="true"/>;
             
             
    
    }
}
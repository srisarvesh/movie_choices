import ReactDOM from 'react-dom'
import React, { Component } from 'react'; 
import { Button } from 'bootstrap';
import Input from './common/input'
import { object } from 'prop-types';
import Joi from 'joi-browser'
import Form from './common/form'


class LoginForm extends Form {
    state={
        data:{username:"",password:""},
        errors:{}
    };
    schema={
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password")
    }; 
       doSubmit=()=>{
            console.log("submitted")
        } 
    render() { 
      
        return (
            
            <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username','Username')}
                {this.renderInput('password','Password',"password")}
                {this.renderButton("Login")}
            </form>
            </div>
          );
    }
}
 
export default LoginForm;
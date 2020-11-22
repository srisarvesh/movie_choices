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
      const{data,errors}=this.state;
        return (
            
            <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
               <Input name={"username"} value={data.username} error={errors.username} label="Username" onChange={this.handleChange}/>
                <Input name={"password"} value={data.password} error={errors.password} label="Password" onChange={this.handleChange}/>
                
                <button 
                disabled={this.validate()} 
                className="btn btn-primary">Login</button>
            </form>
            </div>
          );
    }
}
 
export default LoginForm;
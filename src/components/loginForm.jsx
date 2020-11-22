import ReactDOM from 'react-dom'
import React, { Component } from 'react'; 
import { Button } from 'bootstrap';
import Input from './common/input'
import { object } from 'prop-types';
import Joi from 'joi-browser'


class LoginForm extends Component {
    state={
        account:{username:"",password:""},
        errors:{}
    };
    schema={
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password")
    }; 
   
    validate=()=>{
            const options={abortEarly:false}
            const {error}=Joi.validate(this.state.account,this.schema,options);
            if(!error) return null;

            const errors={}
            for(let item of error.details)
            {
                errors[item.patj[0]]=item.message;
            }
            return errors;  
        }
        validateProprty=({name,value})=>{
            if(name==='username')
            {
                if(value.trim()==='')
                {
                    return 'Username is required';
                }

            }
            if(name==='password')
            {
                if(value.trim()==='')
                {
                    return 'password  is required';
                }
                
            }
        }
       
      handleSubmit=e=>{
            e.preventDefault();
            const errors=this.validate();
            this.setState({errors:errors||{}})
            if(errors)
            {
                return;
            }
           console.log("submitted")
        };

        handleChange=({currentTarget:input})=>{
            const errors={...this.state.errors}
            const errorMessage=this.validateProprty(input);
            if(errorMessage)
            {
                errors[input.name]=errorMessage;
            } 
            else{
                delete errors[input.name];
            }
            const account={...this.state.account};
            account[input.name ]=input.value;
            this.setState({account,errors});
        }
        
        
    
    render() { 
      const{account,errors}=this.state;
        return (
            
            <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
               <Input name={"username"} value={account.username} error={errors.username} label="Username" onChange={this.handleChange}/>
                <Input name={"password"} value={account.password} error={errors.password} label="Password" onChange={this.handleChange}/>
                
                <button className="btn btn-primary">Login</button>
            </form>
            </div>
          );
    }
}
 
export default LoginForm;
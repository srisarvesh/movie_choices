import ReactDOM from 'react-dom'
import React, { Component } from 'react'; 
import { Button } from 'bootstrap';
import Input from './common/input'
import { object } from 'prop-types';


class LoginForm extends Component {
    state={
        account:{username:"",password:""},
        errors:{}
    };
   
    validate=()=>{
            const errors={};
            const {account}=this.state;
            if(account.username==='')
            {
                errors.username="Username is required";
            }
            if(account.password==='')
            {
                errors.password="Password is required";
            }
            return Object.keys(errors).length===0?null:errors;
        }
        validateProprty=({name,value})=>{
            if(name==="Username")
            {
                if(value.trim()==='')
                {
                    return 'Username is required'
                }

            }
            if(name==="password")
            {
                if(value.trim()==='')
                {
                    return 'password  is required'
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
            this.setState({account});

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
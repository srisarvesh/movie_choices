import React, { Component } from 'react';
const Input = ({name,label,error,...rest}) => {
    return ( 
        <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input                                               
                     {...rest}
                     name={name} 
                    
                     id={name}
                     
                     className="form-control"
                     />
                     {/*}
                     // we use rest operator ...rest to retrive all other values from the props except name,label,error 
                      // value={value} 
                      // onChange={onChange}
                      //type={type}
                      //since in the above code the values are like this we use rest operator
                     */}
                
                {error &&  <div className="alert alert-danger">{error}</div>}
                </div>  
     );
}
 
export default Input;
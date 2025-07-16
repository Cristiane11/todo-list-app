import {Component}from 'react';
import { useState } from 'react';


function FunctionClassComponent(){
    const[message, setMessage] = useState("welcome to the Class")
  
    
    
  
    return (
        <div>
            <h1>Hello from Class Component</h1>
            <p>{message}</p>
            <button onClick={() => setMessage('Tenha um Bom Dia!')}>Change Message</button>
        </div>
    );
}

export default FunctionClassComponent;
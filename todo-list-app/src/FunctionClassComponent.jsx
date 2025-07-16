
import { useState } from 'react';


function FunctionClassComponent(){
    const[message, setMessage] = useState("welcome to the Class")
  
    const changeMessage =()=>{
        setMessage('Tenha um Bom Dia!')
    }
    return (
        <div>
            <h1>Hello from Class Component</h1>
            <p>{message}</p>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    );
}

export default FunctionClassComponent;
import React from 'react';
import { useState } from 'react';


function DefaultProps(props){
    const[name, setName] = useState(DefaultProps.initialName)
  
    const changeName =()=>{
        setName('Tenha um Bom Dia!')
    }
    return (
        <div>
            <h1>Hello from Class Component</h1>
            <p>{name}</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

DefaultProps.initialName = {
    initialName: "Cristiane"
};

export default DefaultProps;
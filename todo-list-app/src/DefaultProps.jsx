import React from 'react';
import { useState } from 'react';
//import {string} from 'prop-types'


function DefaultProps(/*props- Nao sei pq props is not working */){
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

DefaultProps.propTypes = {
    initialName: string,
};
DefaultProps.defaultProps ={
    initialName: 'Cristiane'
}
export default DefaultProps;
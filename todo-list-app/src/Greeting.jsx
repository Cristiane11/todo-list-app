import React from 'react';
import { useState } from 'react';
import {string} from 'prop-types'


const Greeting = (props) => {
    const[name, setName] = useState(props.initialName);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[user, setUsers] = useState(['Alice','Bob','Charlie','John'])
    
    const handleLoginClick =()=>{
        setIsLoggedIn(true);
    }

    const handleLogOutClick =()=>{
        setIsLoggedIn(false);
        setName(props.initialName)
    }
    return (
        <div>
            <p>
                {props.customMessage}
            </p>
            <ul>
                {user.map((user, index)=>(
                    <li key={index}>{user}</li>
                ))}
            </ul>
        <p>
        {/*expression  false ? <true>:<false>*/}
        {isLoggedIn ? `Hello, ${name} ! Welcome back !` : props.customMessage}
        </p>
        {/* expression is false ? ask to login: ask to logout*/ }
        {!isLoggedIn ? (
            <button onClick ={handleLoginClick}>Log in</button>
        ) : (
            <button onClick={handleLogOutClick}> Log Out</button>
        )
        
    }
            
        </div>
    );
}

Greeting.propTypes = {
    initialName: string,
};
Greeting.defaultProps ={
    initialName: 'Cristiane'
}
export default Greeting;
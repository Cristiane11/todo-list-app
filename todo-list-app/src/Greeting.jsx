import React from 'react';
import { useState } from 'react';
import {string} from 'prop-types'


function Greeting = (props) => {
    const[name, setName] = useState(props.initialName);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div>
        <p>
        {/*expression ? <true>:<false>*/}
        {isLoggedIn ? `Hello, ${name} ! Welcome back !` : props.customMessage}
        </p>
        {/* expression is false ?ask to login: ask to logout*/ }
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
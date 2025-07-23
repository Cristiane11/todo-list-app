/*
Handling events is crucial in React for building interactive user interfaces. React provides a set of synthetic events that are consistent across different browsers, allowing you to handle various user actions seamlessly.

React Events
1. Events in React
React wraps native events in a cross-browser compatible SyntheticEvent object.
Synthetic events are normalized, meaning you can rely on them to behave consistently across different browsers.
2. Event Handling Basics
Events can be attached to React components using JSX attributes.
Handlers can be defined as functions that will execute when the event occurs.


React’s SyntheticEvent system plays a key role in how React manages events when building and modifying the DOM via the Virtual DOM. To understand the relationship between SyntheticEvent, the Virtual DOM, and how React efficiently updates the real DOM, let's explore how these pieces work together.

1. What is the Virtual DOM?
The Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model).
Whenever a React component’s state or props change, React updates the Virtual DOM first. It then compares this updated Virtual DOM with a snapshot of the previous Virtual DOM (using a process called reconciliation).
React identifies the minimal changes needed by comparing the old and new Virtual DOM, and then it efficiently updates the real DOM in the browser.
The Virtual DOM is crucial because manipulating the real DOM directly is slow and inefficient. By using a Virtual DOM, React minimizes expensive real DOM updates, improving performance.

2. React SyntheticEvent and Virtual DOM
The SyntheticEvent system in React is a way to handle user interactions (such as clicks, typing, form submissions, etc.) in a way that works consistently across all browsers. It acts as a wrapper for the native browser events and integrates with React’s Virtual DOM to handle updates smoothly.


How They Work Together:
Synthetic Events help React capture user interactions (e.g., clicking a button) that trigger state or props changes in a React component.
These changes (like updating state) cause the affected components to re-render.
React does not immediately update the real DOM. Instead, the component re-renders by updating the Virtual DOM.
React then diffs the new Virtual DOM with the previous version to calculate the minimal changes needed to update the real DOM (this is called reconciliation).
Once the changes are calculated, React applies only the necessary changes to the real DOM, making the whole process efficient.

In conclusion, React's SyntheticEvent system and Virtual DOM work hand-in-hand to ensure efficient and consistent updates to the UI, making event-driven programming in React more performant and easier to manage.



syntheticevent.png


🧠📓Engage & Apply: Setting up an Events Pokémon Project 
We will be creating a UI that will visually show us each event we listen for.  It will also allow us to type in a name of a Pokémon and display their name and image from pokeAPI. 

Initialize the Project:
Create a folder where the project will be created
Open your terminal in that directory
Run npx create-vite pokemon-events --template react to create a new React project using Vite.
Navigate into your project directory: cd pokemon-events.
Install the necessary dependencies by running npm install.

Verify Installation:
Start the development server with npm run dev.
Open your browser and navigate to http://localhost:5173. You should see the React welcome page.

Open VS Code and Create Component Files:
Open the pokemon-events folder inside of VS Code
Create the following file inside of the src folder: PokemonEvents.jsx


Setup State Variables
Inside of PokemonEvents.jsx lets start by importing useState, creating the function-based component, and setting up the state variables:

// src/PokemonEvents.jsx

import { useState } from 'react';

function PokemonEvents() {
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState();
    const [pokemonError, setPokemonError] = useState('');
    const [errorStatus, setErrorStatus] = useState('');

}

export default PokemonEvents;
Explanation:
Imports:
We import useState so we can eventually show when the events are being fired off

State Variables
inputValue  will be used to capture the value the user types into the text box we will make later
eventStatus will be used to visually show when an event has taken place
pokemon  will be used to store the Pokémon data we get back from pokeAPI
pokemonError  will be used to display an error message if the user types in something that isn't a Pokémon
errorStatus  will be used to display an error message if an image isn't able to be loaded


Create Event Functions
Right underneath the last state variable, let's create the functions that will run when each event happens (we will mark the added block of code with a comment).

// src/PokemonEvents.jsx

import { useState } from 'react';

function PokemonEvents() {
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState();
    const [pokemonError, setPokemonError] = useState('');
    const [errorStatus, setErrorStatus] = useState('');

		/*********** New section of code starts here ***********/
		
		 // Event handler for button click
  /*  const handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .then(setPokemonError("")) // reset pokemon error message
            .catch(() => setPokemonError(`${inputValue} is not a valid Pokemon`));
    };

    // Event handler for input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Event handlers for mouse events
    const handleMouseOver = () => {
        setEventStatus('Mouse has entered the button, you can click it now!');
    };

    const handleMouseOut = () => {
        setEventStatus('The mouse has left the button, clicking is not possible ):');
    };

    // Event handlers for keyboard events
    const handleKeyDown = (event) => {
        setEventStatus(`Key down: ${event.key}`);
    };

    const handleKeyUp = (event) => {
        setEventStatus(`Key up: ${event.key}`);
    };

    // Event handlers for focus events
    const handleFocus = () => {
        setEventStatus('Input field is focused, type a Pokemon name!');
    };

    const handleBlur = () => {
        setEventStatus('Input field lost focus, there will be no searching...');
    };

    // Event handlers for image load events
    const handleLoad = () => {
        setEventStatus('Image loaded successfully!');
    };

    const handleError = () => {
        setErrorStatus('Error loading image');
    };		 
		 /*********** New section of code ends here ***********/ 
/*}*/
/*
export default PokemonEvents;
Explanation:
Event Functions:
These functions will run when events happen in the browser window

handleClick - will run when the user clicks an element on the page.  
This will be applied to a button that will be created later.  
It will then take the value the user has entered into the text box, that's stored in inputValue and call pokeAPI with it using fetch and .then 
Once the data is retrieved, it will set that Pokemon's data into the pokemon state variable.  
It will clear any previous fetch errors that may have been set in pokemonError 
If there's any errors thrown when trying to fetch the Pokémon it will use setPokemonError to put the message, `${inputValue} is not a valid Pokemon` inside of the pokemonError state variable.

handleChange - will run when the user changes the value of an element on the page.  
This will be applied to the input box we will create later.  In other words, when the user types a character into the text box, it will fire this event off.  
It receives event as a parameter which is the element on the page that had the event happen to it (the text box).  
Then it uses setInputValue to set the value of inputValue to event.target.value which is the value of the target of the change event (the text box).  
This is how we can capture the value the user typed into the text box. 

handleMouseOver - will run when the user positions the mouse cursor over an element on the page.  
We will apply this to a button we will create later.  
It will then run setEventStatus which will update the value of eventStatus displaying a message on the page notifying us that the event happened.

handleMouseOut - will run when the user positions the mouse cursor off of an element on the page.  
We will apply this to the button we will create later.  
It will then run setEventStatus which will update the value of eventStatus displaying a message on the page notifying us that the event happened.

handleKeyDown - will run when the user pushes a key on the keyboard all the way down.  
This will then run setEventStatus updating the value of eventStatus to event.key which is value of the key that was pressed down.

handleKeyUp - will run when a key on the keyboard is currently down and is released.  
This will then run setEventStatus updating the value of eventStatus to event.key which is value of the key that was released.

handleFocus - will run when an element on the page is clicked on or selected.  
In this case, it will be when the input box is clicked on so we can begin typing.  
When that event happens, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.

handleBlur - will run when an element that was previously selected (focus) is clicked off of or deselected (loses focus).  
In this case, it will be when the input box is currently selected and something else is clicked on deselecting it.  
When that event happens, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.

handleLoad - will run when a media element is loaded onto the page.  
In this case, it will be when an image loaded successfully.  
When the event fires off, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.

handleError - will run when a media element cannot be loaded onto the page.  
In this case, it will be when an image loaded unsuccessfully.  
When that event fires off, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.



Create the Form
Now let's add the code that will place the form, text box, header, button, etc. on the page so we can start to make these events happen.  Right underneath the last event function (handleError), let's add this code (we will mark the added block of code with a comment):

// src/PokemonEvents.jsx

import { useState } from 'react';

function PokemonEvents() {
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState();
    const [pokemonError, setPokemonError] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
		
		 // Event handler for button click
    const handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .then(setPokemonError("")) // reset pokemon error message
            .catch(() => setPokemonError(`${inputValue} is not a valid Pokemon`));
    };

    // Event handler for input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Event handlers for mouse events
    const handleMouseOver = () => {
        setEventStatus('Mouse has entered the button, you can click it now!');
    };

    const handleMouseOut = () => {
        setEventStatus('The mouse has left the button, clicking is not possible ):');
    };

    // Event handlers for keyboard events
    const handleKeyDown = (event) => {
        setEventStatus(`Key down: ${event.key}`);
    };

    const handleKeyUp = (event) => {
        setEventStatus(`Key up: ${event.key}`);
    };

    // Event handlers for focus events
    const handleFocus = () => {
        setEventStatus('Input field is focused, type a Pokemon name!');
    };

    const handleBlur = () => {
        setEventStatus('Input field lost focus, there will be no searching...');
    };

    // Event handlers for image load events
    const handleLoad = () => {
        setEventStatus('Image loaded successfully!');
    };

    const handleError = () => {
        setErrorStatus('Error loading image');
    };

		 /*********** New section of code starts here ***********/
		 
		 /*return (
        <div>
            <h2>Event Handling in React</h2>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    placeholder="Type a Pokemon Name..."
                />

                <button
                    type="button"
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Load Pokemon
                </button>

            </form>
        </div>
    );
		 		 		 
		 /*********** New section of code ends here ***********/ 
/*}

export default PokemonEvents;


Explanation:
Header and Div:
We start out the returned jsx with a containing div and a header

Input Element in the Form:
The text box element in the form has multiple attributes with interesting values.  Let's go over them one by one

type="text" - defines the input as a text box that can be typed in

value={inputValue} - sets the value of the text box equal to whatever the inputValue state variable's value is.

onChange={handleChange} - the onChange attribute creates the event listener for the change event.  
When the value of the textbox changes, the handleChange function (discussed above) is called.  
This is how we capture the value the user enters, character by character.

onFocus={handleFocus} - the onFocus attribute creates the event listener for the focus event.  
When the textbox is clicked on or selected, the handleFocus function (discussed above) is called
The eventStatus state variable is updated, and the message is displayed. 

onBlur={handleBlur} - the onBlur attribute creates the event listener for the blur event.  
When the textbox is clicked out of, or deselected, the handleBlur function (discussed above) is called
The eventStatus state variable is updated, and the message is displayed. 

onKeyDown={handleKeyDown} - the onKeyDown attribute creates the event listener for the keydown event.  
When a key on the keyboard is pressed all the way down, the handleKeyDown function (discussed above) is called
The eventStatus state variable is updated, and the message containing the key that was pressed down is displayed. 

onKeyUp={handleKeyUp} - the onKeyUp attribute creates the event listener for the keyup event.  
When a key on the keyboard is pressed down and then released, the handleKeyUp function (discussed above) is called
The eventStatus state variable is updated, and the message containing the key that was released is displayed. 

placeholder="Type a Pokemon Name..." - defines what message will go into the textbox when nothing has been entered into it.
  This is mainly used to give directions to the user.

Button Element in the Form:
The button element in the form has multiple attributes as well.  Let's go over them one by one

type="button" - defines the type of button we are using, which is a normal clickable button.  
Always specify the type attribute for your buttons since different browsers may use different default button types.  

onClick={handleClick} - the onClick attribute creates the event listener for the click event.  
When the button is clicked, the handleClick function (discussed above) is called.  
This is how we can make the API call after the button has been clicked.

onMouseOver={handleMouseOver} - the onMouseOver attribute creates the event listener for the mouseover event.  
When the cursor moves over the button, the handleMouseOver function (discussed above) is called
The eventStatus state variable is updated, and the message is displayed. 

onMouseOut={handleMouseOut} - the onMouseOut attribute creates the event listener for the mouseout event.  
When the cursor is currently over the button and then moves off of it, the handleMouseOut function (discussed above) is called,
The eventStatus state variable is updated, and the message is displayed. 

The text in-between the button element, "Load Pokemon", defines the text that will be on the button itself.






Display the Pokémon, Messages, and Errors
Now let's add the code that will allow us to see the effects of our events.  Between the closing form tag and closing div tag, let's add this code (we will mark the added block of code with a comment):

// src/PokemonEvents.jsx

import { useState } from 'react';

function PokemonEvents() {
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState();
    const [pokemonError, setPokemonError] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
		
		 // Event handler for button click
    const handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .then(setPokemonError("")) // reset pokemon error message
            .catch(() => setPokemonError(`${inputValue} is not a valid Pokemon`));
    };

    // Event handler for input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Event handlers for mouse events
    const handleMouseOver = () => {
        setEventStatus('Mouse has entered the button, you can click it now!');
    };

    const handleMouseOut = () => {
        setEventStatus('The mouse has left the button, clicking is not possible ):');
    };

    // Event handlers for keyboard events
    const handleKeyDown = (event) => {
        setEventStatus(`Key down: ${event.key}`);
    };

    const handleKeyUp = (event) => {
        setEventStatus(`Key up: ${event.key}`);
    };

    // Event handlers for focus events
    const handleFocus = () => {
        setEventStatus('Input field is focused, type a Pokemon name!');
    };

    const handleBlur = () => {
        setEventStatus('Input field lost focus, there will be no searching...');
    };

    // Event handlers for image load events
    const handleLoad = () => {
        setEventStatus('Image loaded successfully!');
    };

    const handleError = () => {
        setErrorStatus('Error loading image');
    };
		 
		 return (
        <div>
            <h2>Event Handling in React</h2>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    placeholder="Type a Pokemon Name..."
                />

                <button
                    type="button"
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Load Pokemon
                </button>

            </form>

						/*********** New section of code starts here ***********/

						/*{pokemon && (
		                <div>
		                    <p style={{ textTransform: 'capitalize' }}><b>{pokemon.name}</b></p>
		                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
		                </div>
						  )}

            	{pokemonError && <p style={{ color: 'red' }}>{pokemonError}</p>}      

            	<p>{eventStatus}</p>

	            <img
	                src="notValidImage.jpg"
	                alt="Not valid Image"
	                onLoad={handleLoad}
	                onError={handleError}
	            />

	            {errorStatus && <p style={{ color: 'red' }}>{errorStatus}</p>}

						/*********** New section of code ends here ***********/ 
        /*</div>
    );	
}

export default PokemonEvents;
Explanation:
Conditional Rendering the Pokémon Data

Take a look at this code: {pokemon && ( .... 
Here we are using a conditional rendering pattern called short-circuiting which allows us to display things if something is true or exists.  
In an && statement, both conditions have to be true for the whole statement to evaluate to true.  
So if the first condition is true it has to check the next condition to see what the whole statement needs to evaluate to.  
If the first condition is false, then it will "short-circuit" and ignore the next condition.  The first condition was false so there's no reason to continue on evaluating the values.
In our code, if pokemon has a value, or is truthy, then it will evaluate the next condition of the && statement, which will display the div with the Pokémon's name and image.  
If pokemon doesn't have a value or is falsy, then the && statement doesn't need to continue to the next condition so the div will not appear on the page.
If you're still not 100% sure how conditional rendering works take a look at this video:



  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  
  

  
    
    

    
      
    
  
  

  

  

  



  






Go back and take a look at the handleClick function  
After the API call is made and it retrieves the Pokémon information, it uses setPokemon to put the retrieved data into the pokemon state variable.  

Now go back to the code we just entered, and look inside the div that we are conditionally rendering.  
We are using the pokemon state variable inside of the div to display the name and image of the Pokémon. 
The Pokémon data comes back as an object so we are using pokemon.name to display the Pokémon's name. 
We are using the CSS property/value textTransform: 'capitalize' to capitalize the first letter of the Pokémon's name
We then use the API to display an image of the retrieved Pokémon.  There are many images of each Pokémon in pokeAPI.  The location of the image in the API object that we chose to display is: pokemon.sprites.other.home.front_default
Remember, the div with the Pokémon's information will only show if we actually retrieve a Pokémon from the API and successfully set it to the pokemon state variable

Conditional Rendering the Pokémon Error

Take a look at this code: {pokemonError && .... 
This is the same concept as above.  If there's a value in the pokemonError state variable, it will display the message in a red color.  
Remember:  pokemonError is set in the handleClick function if a Pokémon can't be retrieved using the user's input

The eventStatus state variable

Take a look at this code: <p>{eventStatus}</p> - this is the state variable that we update many times throughout our project.
Because we put this state variable on the page, whenever the value of it changes, React will re-render the component and display the new, updated value on the page.

The Image using onLoad and onError 

This image, like the button and text box, has some attributes.  Lets go over them

src="notValidImage.jpg" - defines where the image is located
To demonstrate how onError works we put in a fake image location forcing it to error out

alt="Not Valid Image" - this is a text description of the image. 

onLoad={handleLoad} - the onLoad attribute creates the event listener for the external resource load event.  
When the browser tries to load the image and is successful, the handleLoad function (discussed above) is called.  
This will display the "Image loaded successfully!" message

onError={handleError} - the onError attribute creates the event listener for the external resource load error event.  
When the browser tries to load the image and is unsuccessful, the handleError function (discussed above) is called.  
This will display the "Error loading image" message

Conditional Rendering errorStatus

Take a look at this code: {errorStatus && .... 
This is the same concept as we've already discussed.  If there's a value in the errorStatus state variable, it will display the message in a red color.  
Remember:  errorStatus is set in the handleError function if an external resource can't be successfully loaded


Add PokemonEvents Component to App.jsx
Now that our PokemonEvents component is finished, let's add it to App.jsx so we can see everything in action.  Erase everything in App.jsx and replace it with this:

// src/App.jsx

import './App.css'
import PokemonEvents from './PokemonEvents'

function App() {

  return (
    <>
     <PokemonEvents/>
    </>
  )
}

export default App;
Explanation:
We import the CSS
We import the PokemonEvents component so we can use it further below in the JSX being returned
Export App
Lastly, tidy up and test everything
It should work now, and you should be able to visually see all of the messages appearing on the page as the events happen
Be sure to test it out and fix any issues/bugs that may have crept up

Time to celebrate! 🎉  

That should finish up our Pokémon Events project.  Now you should be able to listen for, and respond to events that happen in the web browser! 


🛑 Best Practices for Handling Events in React
Keep Handlers Simple: Ensure that each handler focuses on a single task to enhance readability and maintainability.
Use Controlled Components: For form elements, manage their value through state to ensure they remain in sync with your application state.
Avoid Anonymous Functions in JSX: Define event handlers outside of the JSX to prevent unnecessary re-renders.


Conclusion
Event handling is a fundamental aspect of creating interactive applications in React. By understanding how to handle different types of events, you can create a more dynamic user experience. Practice implementing various event handlers to become proficient in managing user interactions in your React applications.





✅ Congratulations! You've successfully completed the "Handling Events in React" lesson! You learned how create, listen for,



*/ 
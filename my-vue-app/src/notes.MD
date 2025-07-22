🧠📓Engage & Apply: Setting up a Pokémon Project 
Let's start by creating a UI to fetch some Pokémon from pokeAPI.  We'll use function-based components to illustrate the component lifecycle in React.

Initialize the Project:
Create a folder where the project will be created
Open your terminal in that directory
Run npx create-vite pokemon-ui --template react to create a new React project using Vite.
Navigate into your project directory: cd pokemon-ui.
Install the necessary dependencies by running npm install.

Verify Installation:
Start the development server with npm run dev.
Open your browser and navigate to http://localhost:5173. You should see the React welcome page.

Open VS Code and Create Component Files:
Open the pokemon-ui folder inside of VS Code
In the src directory, create a new folder named components.
Inside components, create the following file:
PokemonList.jsx for displaying a list of Pokémon.


Inside of PokemonList.jsx add this code:

// src/components/PokemonList.jsx
import { useState, useEffect } from 'react';

function PokemonList() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect to handle component mounting
    useEffect(() => {

        const fetchPokemonData = async () => {
        
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');

                if (!response.ok) {
                    throw new Error('Pokemon fetch did not work');
                }

                const pokemonData = await response.json();

                // when the state is changed, this is where the updating phase happens. 
                setPokemon(pokemonData.results); // .results is where the array of pokemon exists
                
                // this will unmount the "Loading Pokemon..." message
                setLoading(false); 
        }

        fetchPokemonData();        

    }, []); // Empty dependency array ensures this runs once after the component is mounted

    // when loading is no longer true, this message will unmount and no longer display
    if (loading) {
        return <div>Loading Pokemon...</div>;
    }

    return (
        <div>
            <h1>List of Pokemon</h1>
            <ul>
                {pokemon.map(poke => (
                    <li key={poke.name}>
                        <p>{poke.name}</p>
                        <img src={`https://img.pokemondb.net/artwork/${poke.name}.jpg`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;
Explanation:
State Initialization:
pokemon: Stores the fetched data.
loading: A boolean flag indicating whether the data is still being fetched.

useEffect Hook:
The useEffect hook is triggered once when the component is mounted (because of the empty dependency array []).
Inside useEffect, we define an async function (fetchPokemonData) to fetch the data using the fetch() API with await for asynchronous code.

Error Handling:
If response.ok is true, in other words, everything worked, then it will continue, if not it will throw the error

Conditional Rendering:
While the data is still loading (loading is true), a "Loading Pokemon..." message is displayed.
Once the data is successfully fetched, the component renders the data by mapping through the Pokémon and showing their names and images from another API (pokemondb.net).  We use this other API because pokeAPI doesn't give us a useable way to get the images when fetching multiple Pokémon.
The CSS
Let's make it look a bit better.

Erase everything in App.css and add this to it:
/* src/App.css */

body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

ul {
  list-style-type: none;
}

li {
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: lightgrey;
  color:black;
  text-transform: capitalize;
}
The CSS file App.css provides basic styling for these components.

App.jsx
Erase everything in App.jsx and add this:

// src/App.jsx
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  const [showPokemonList, setShowPokemonList] = useState(false); // State to control visibility

  return (
      <div className="App">
          <h1>Welcome to the Pokemon App</h1>
          {/* Button to toggle the visibility of the PokemonList component */}
          <button onClick={() => setShowPokemonList(!showPokemonList)}>
              {showPokemonList ? 'Hide Pokemon List' : 'Show Pokemon List'}
          </button>

          {/* Conditionally render the PokemonList component */}
          {showPokemonList && <PokemonList />}
      </div>
  );
}

export default App;
Explanation:
Imports useState  PokemonList and App.css

Creates a state variable, showPokemonList that will control whether the list of Pokémon will show or not and it's set to false.

The button has an onClick event listener, so when it is clicked, it will set the showPokemonList state variable to the opposite value of what it currently was.  The text on the button will show "Hide Pokemon List" when showPokemonList is true and will display "Show Pokemon List" when it's false.

When showPokemonList is true, it will then mount/show the PokemonList component.  If it's false it will hide/unmount it.


How useState and useEffect Fit into the Component's Lifecycle in this Project
Mounting:
useState initializes state with a default value on the first render.
The state setter (e.g., setPokemon) is available for updating the state.
useEffect runs when the component mounts if you pass an empty array [] as the dependency

Updating:
When the state of any of the state variables is updated using the state setter (e.g., setPokemon  setLoading showPokemonList) the component re-renders with the new state.
If you pass dependencies (like [pokemon]), useEffect would run every time one of those dependencies changes.  We did not do this in this example however because it was not needed.

Unmounting:
When the component unmounts, the state created with useState is discarded.
In App.jsx we have a button that will either show or hide the list of Pokémon depending on what the value of showPokemonList is.  When it's true, the PokemonList component is mounted.  When it's false the PokemonList component is unmounted.


🛑 Common String Pitfalls and Tips
React's lifecycle methods and hooks can sometimes be tricky to navigate, especially when developing complex applications. Here are some common pitfalls and tips to help you manage the component lifecycle effectively:

Common Pitfalls
Not Understanding Mounting, Updating, and Unmounting Phases:
Pitfall: Confusing the different phases of a component’s lifecycle can lead to unintended behavior. For example, using an effect that should only run on mount but not understanding that it also runs on every update.
Tip: Familiarize yourself with the lifecycle phases. Use useEffect with the appropriate dependency array to control when effects run. An empty array [] means it only runs on mount and unmount.

Overusing useEffect:
Pitfall: Using multiple useEffect hooks unnecessarily or combining unrelated logic into a single effect can lead to confusion and difficult debugging.
Tip: Keep useEffect hooks focused. Separate effects for different concerns (e.g., one for fetching data, another for handling subscriptions).

Dependency Array Mistakes:
Pitfall: Omitting dependencies in the useEffect dependency array can lead to stale closures or missed updates. Conversely, including too many dependencies can cause excessive re-renders.
Tip: Always include all state and props used inside useEffect in the dependency array to ensure it runs correctly. 
Tips for Managing Lifecycle Effectively
Use Functional Components with Hooks:
Prefer functional components and hooks (like useEffect) over class components for a more modern and concise syntax, as well as easier handling of side effects.

Utilize React.StrictMode:
Use React.StrictMode during development to identify potential issues such as deprecated lifecycle methods and unexpected side effects.  You can see that Vite sets this up for us automatically in main.jsx

Debugging Tools:
Use React DevTools for monitoring component lifecycle methods and understanding the render behavior, helping diagnose performance issues or unmounting problems.  This is a browser plugin that needs to be installed.

import Coffees from './Coffees';
//import ClassComponent  from './ClassComponent';
//import FunctionClassComponent from './FunctionClassComponent';
//import DefaultProps from './DefaultProps';
import Teas from './Teas';
import Pastries from './Pastries';
import Greeting from './Greeting';


function App() {
  const  customMessage ="Welcome to the ReactApp";
  return (
    <>
      <Greeting/>
      <h1>Hello World</h1>
      <Coffees milk="Cafe commm leite"/>
      <Teas  customMessage={customMessage}/>
      <Pastries/>
    </>
  )
}

export default App
  

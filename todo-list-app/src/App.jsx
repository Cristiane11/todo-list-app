import Coffees from './Coffees';
//import ClassComponent  from './ClassComponent';
//import FunctionClassComponent from './FunctionClassComponent';
import DefaultProps from './DefaultProps';
import Teas from './Teas';
import Pastries from './Pastries';


function App() {
  return (
    <>
      <DefaultProps />
      <Coffees milk="Cafe commm leite"/>
      <Teas/>
      <Pastries/>
    </>
  )
}

export default App
  

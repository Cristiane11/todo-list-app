import Coffees from './Coffees';
//import ClassComponent  from './ClassComponent';
import FunctionClassComponent from './FunctionClassComponent';
import Teas from './Teas';
import Pastries from './Pastries';


function App() {
  return (
    <>
      <FunctionClassComponent />
      <Coffees milk="Cafe commm leite"/>
      <Teas/>
      <Pastries/>
    </>
  )
}

export default App
  

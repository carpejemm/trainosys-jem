import { useEffect, useState } from 'react';
import './App.css'

// let name = "Jem";
// name = "Josh"

// let firstName: string;
// // let age: number;
// let isTrue: boolean;
// let hobbies: string[]; // array of strings
// let personalDetails: [string, number]; // tuple

// // Union
// let age: number | string;

// age = "5";

// // let person: Object;

// // function
// // let printName: Function;
// let printName: (name: string) => void; // type of return is void
// let printNameAgain: (name: string) => number; // type of return is void

// // Type ANY

// // let hello: any;

// // hello = 5;

// // Type unknown
// let hello: unknown;

// firstName = "Arnold";
// age = 5;
// isTrue = true;
// hobbies = ["Eating", "Drinking"]
// personalDetails = ["Jem", 5]

// // interface
// type PersonTwo = {
//   name: string;
//   age?: number; // optional
//   adresss: string;
// }

// interface Example extends PersonTwo { // inheritance (extends)
//   name: string;
//   age?: number; // optional
// }

// let person: Person = {
//   name: "Jem",
// }

import SampleComponent from './components/SampleComponent'
import DataBindingComponent from './components/DataBindingComponent'
import UseEffectComponent from './components/UseEffectComponent'


// function App() {
const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const [shouldRenderChild, setShouldRenderChild] = useState<boolean>(false);

  // console.log('Render start in useEffect component')

  const handleOnClick = () => {
    setCounter(counter - 10)
  }

  // useEffect with empty dependency array
  // useEffect(() => {
  //   console.log(' useEffect with []');
  // }, []);

  // useEffect with dependecies 
  // useEffect(() => {
  //   console.log(' useEffect with [counter]');
  // }, [counter]);

  // useEffect with return function
  useEffect(() => {
    return () => console.log('Clean-up effect with []')
  },[shouldRenderChild])

  return (
    <>
      {/* <h1>Hello World!</h1>
      <h1>Hello Trainosys!</h1> */}
      <SampleComponent />
      <DataBindingComponent />
      {/* <div style={{margin: '30px'}}>
        <UseEffectComponent />
      </div> */}
      <h1>{counter}</h1>
      <button onClick={handleOnClick}>Decrement by 10</button>
      <button onClick={() => setShouldRenderChild ((shouldRenderChild) => !shouldRenderChild)}>Should render child?</button>
      {shouldRenderChild ? <UseEffectComponent /> : null}
      
    </>
  )
}

export default App

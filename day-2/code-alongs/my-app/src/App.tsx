import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import Sample from './components/sample';
import Card from './components/Card';

// let name = "Jem"; // hover and JS automatically decideds the type
// let firstName: string = "Jem"; 

// firstName = 5; // may error
// firstName = "jem"; // no problem

// let age: number;
// let isTrue: boolean;
// let hobbies: string[];
// let hobbies: number[];
// let role: [number, string] // tuple

// let person: Object;

// // So pano kapag ganyan?
// // Dun na papasok si interface kasi si object maraming properties inside like string and number an so on

// type Person = { // convention is Capital P
//   name: string;
//   age: number;
// }

// // pakita yung walang age or kulang
// let person: Person = {
//   name: 'Jem',
//   age?: 23 /// optional

// }
// // aray of objects
// let lostOfPeople: Person[];

// // UNION
// // pwedeng string pwedeng number
// let age: number | string; 


// // FUNCTION

// // let printName: (name: string) => void;
// let printName: Function; // but here is a better way
// let printName: (name: string) => void; // number or what so ever

// // ANY TYPE

// let anyType: any;
// let anyType: unknown; // must better - usually kapag may mga type checking 


// let printName: (name: string) => never;


// interface Person {
//   name: string;
//   age: number;
// }


// interface Guy extends Person {
//   profession: string;
// }


// const person: Person = {
//   name: "John",
//   age: 30,
// };

// const guy: Guy = {
//   name: "Mike",
//   age: 25,
//   profession: "Engineer",
// };








const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Hello world!</h1>
      {/* <Sample name={name} age={age}/> */}
      {/* <Card /> */}
      <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          title="Basic Tee"
          price="35"
          buttonText="Submit"
          onButtonClick={() => console.log('Save clicked')}
        />
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
          title="Basic White Tee"
          price="35"
          buttonText="Submit"
          onButtonClick={() => console.log('hello')}
        />
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
          title="Basic Charcoal Tee"
          price="35"
          buttonText="Submit"
          onButtonClick={() => console.log('world')}
        />
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
          title="Artwork Dots Tee"
          price="45"
          buttonText="Submit"
          onButtonClick={() => console.log('save the children')}
        />
    </>
  )
}

export default App

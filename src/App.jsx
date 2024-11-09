//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)

  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <div className="App">
      {puppies.map((pup) => {
        return <p key={pup.id}>{pup.name}</p>;
        
      })}
    </div>
  );
}

export default App;

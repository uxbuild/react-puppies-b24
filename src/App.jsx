import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppies);

  // why is this working, when is is this called? how are variables handled?
  const featuredPup = puppies.find((pup)=>{ return pup.id === featPupId})

  return (
    <div className="App">
      {puppies.map((pup) => {
        
        return (
          <p
            onClick={() => {
              console.log("pup id:", pup.id);
              setFeatPupId(pup.id);
            }}
            key={pup.id}
            >
            {pup.name}
          </p>
        )
      })}

      {featPupId && <p>{featPupId}</p>}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

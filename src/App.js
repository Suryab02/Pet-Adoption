
import './App.css';
import Pet from './Pet';
import {useEffect, useState} from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
function App() {
  const [animal, setAnimal] = useState("");
  const[location,setLocation]=useState("");
  const [breed, setBreed] = useState([]);
  const [pets,setPets]=useState([]);

  useEffect(() => {
        getData();   
      },[]); // eslint-disable-line react-hooks/exhaustive-deps
      
      async function getData(){ 
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        console.log(json);
        
        setPets(json.pets);
       
     }
  
   
  return (
    <div>
     <label>Animal</label>
    <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
    <option value="">Select an animal</option>
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
   
      <label>Breed</label>
      <select>
      <option value="">Select breed</option>
        {breed.map((breedItem) => (
          <option key={breedItem}>{breedItem}</option>
        ))}
      </select>
      {pets.map((pet)=>(
        <Pet 
          name={pet.name}
        />
      ))}
      
      
    </div>
  );
}

export default App;


import './App.css';

import {useEffect, useState} from "react";

function App() {

  const [weather,setWeather] = useState([]);
  const [name,setName]=useState("");
  const [wind,setWind]=useState("");
  const [main,setMain] = useState({});
  const [pin,setPin] = useState("");
  const appId=process.env.REACT_APP_WEATHER_API_KEY;
  useEffect(() => {
      if(pin){
          getData();   
      }else{

      }
      },[]); // eslint-disable-line react-hooks/exhaustive-deps
      
      async function getData(){ 
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${pin},in&units=metric&appid=${appId}`);
        const json = await res.json();
        console.log(json);
        setName(json.name);
        setWeather(json.weather);
        setWind(json.wind);
        setMain(json.main);
     }
  
     return (
      <div>
      <label htmlFor="">INDIA</label>
      <label htmlFor="input">ENTER ZIP CODE</label>
      <input value={pin} onChange = {
        (e) => setPin(e.target.value) 
      }></input>
      <button onClick={() => getData()}>Submit</button>
        <h1>{name}</h1>
        <div className="weather-container">
          <h2>Weather:</h2>
          {weather.map((weatherItem, index) => (
            <div key={index}>
              <p>{weatherItem.main}</p>
              <p>{weatherItem.description}</p>
            </div>
          ))}
        </div>
        <div className="wind-container">
          <h2>Wind:</h2>
          <p>{wind.deg}</p>
        </div>
        <div className="temperature-container">
          <h2>Temperature:</h2>
          <p>{main.temp} °C</p>
        </div>
      </div>
    );
  }
  
  export default App;
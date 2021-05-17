import './App.css';
import Card from "./Card";
import "./weather1.jpg";
import { useState, useEffect } from "react";

function App() {
  const [display,setDisplay] = useState({
    "desc":"Haze",
    "temp":38,
    "icon":0 

  })
  // try {
  //   useEffect(() => {
  //     fetch(
  //       "https://api.weatherbit.io/v2.0/current?city=delhi&country=india&key=140c2a81818b4c839f4c030c37e1d794"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setDisplay({"desc":json.data[0].weather.description,"temp":json.data[0].temp,"icon":json.data[0].weather.icon}));
  //   });
  // } catch (error) {
  //   console.log("not working");
  // }
  return (
    <div className="App">
      
      <Card temperature={display.temp} weather={display.desc} place={"New Delhi"} icon={display.icon}/>
      
      
    </div>
  );
}

export default App;

import './App.css';
import Card from "./Card";

import { useState, useEffect } from "react";


function App() {
  const [display,setDisplay] = useState({
    "desc":"Haze",
    "temp":38,
    "icon":800,
    "city":"Delhi" 

  })
  const src = "clear.png"
  const [city,setCity] = useState("")
  const [result,setResult] = useState("delhi")
  const [icon,SetIcon] = useState("fas fa-sun")
  const [isHidden,ToggleHidden] = useState(true)
  

  const cityFinder = (e)=>{
    setCity(e.target.value)

  }
  const iconHandler = ()=>{
    //thunderstorm
    if(display.icon>=200 && display.icon<=233){
      SetIcon("fas fa-bolt")
    }
    // drizzle
    else if(display.icon>=300 && display.icon<=302){
      SetIcon("fas fa-cloud-rain")
    }
    //rainfall
    else if((display.icon>=500 && display.icon<=522)||(display.icon == 900)){
      SetIcon("fas fa-cloud-showers-heavy")
    }
    //snow
    else if((display.icon>=600 && display.icon<=610)||(display.icon>=621 && display.icon<=623)){
      SetIcon("fas fa-snowflake")
    }
    //sleet
    else if(display.icon== 611 || display.icon==612){
      SetIcon("fas fa-wind")
    }
    //haze
    else if(display.icon>=700 && display.icon<=751){
      SetIcon("fas fa-smog")
    }
  
    //few clouds
    else if(display.icon>=801 && display.icon<=803){
      SetIcon("fas fa-cloud-sun")
    }
    //overcast
    else if(display.icon==804){
      SetIcon("fas fa-cloud")
    }
    else{
      SetIcon("fas fa-sun")
    }
    
}

  const resultSetter = (e)=>{
    e.preventDefault();
    setResult(city)
    console.log("working")
    iconHandler()
    console.log("fine") 
   
  }

  
  

  
  // try {
  //   useEffect(() => {
  //     setTimeout(()=>{
  //       fetch(
  //         `https://api.weatherbit.io/v2.0/current?city=${result}&country=india&key=140c2a81818b4c839f4c030c37e1d794`
  //        )
  //          .then((res) => res.json())
  //          .then((json) => setDisplay({"desc":json.data[0].weather.description,
  //          "temp":json.data[0].temp,
  //          "icon":json.data[0].weather.code,
  //         "city":json.data[0].city_name}));
  //      },2000);

  //     })
     
  // } catch (error) {
  //  console.log("not working");
  // }
  return (
    <div className="App" >
      <i className="fas fa-plus add-btn" onClick={()=>ToggleHidden(!isHidden)}></i>
     
      <form className="search-area" onSubmit={resultSetter} style={isHidden ? { display:'none'} : {display : 'block'}}>
          <input className="search-input" placeholder="enter a city" onChange={cityFinder}/>
          <button className="search-btn" type="submit">Search</button>
      </form>
    
      
      <Card temperature={display.temp} weather={display.desc} place={display.city} icon={icon}/>
      
      
    </div>
    
  );
}

export default App;

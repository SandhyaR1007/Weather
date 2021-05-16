import React from 'react'
import "./Card.css"

function Card(props) {
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const d = new Date();
    const day = d.getDay();
    const  date = d.getDate();
    const month  = d.getMonth();
    return (
        
        <div className="card">
            <div className="weather sub-card">
                <i class="far fa-sun"/>
                <p className="wthr">{props.weather}</p>
                <p className="place">{props.place}</p>
            </div>
            
            <div className="temperature sub-card">
                <h1 className="temp">{props.temperature}</h1>
                
            </div>
            <div className="date-day sub-card">
                <h2 className="day">{week[day]}</h2>
                <h3 className="date">{date} {year[month]}</h3>
                
            </div>
            
            

            
            
        </div>
    )
}

export default Card

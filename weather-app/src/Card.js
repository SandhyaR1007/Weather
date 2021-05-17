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
            
            <div className="header">
                <div className="place">{props.place}</div>
                <div className="day-date">
                <div className="day">{week[day]}</div>
                <div className="date">{date} {year[month]}</div>
                </div>
               

            </div>
            <div className="middle sub-card">
                <div className="temp">{props.temperature}<span className="deg">oC</span></div>
            </div>
            <div className="footer sub-card">
               
            <i class={props.icon}></i>
           
            
                <div className="weather">{props.weather}</div>
            </div>
            
             
            
    
            
        </div>
    )
}

export default Card
